type FrontmatterValue = string | string[];

export interface ParsedFrontmatter {
  data: Record<string, FrontmatterValue>;
  body: string;
}

function parseInlineArray(value: string): string[] {
  const inner = value.slice(1, -1).trim();
  if (!inner) return [];
  return inner.split(',').map((item) => item.trim().replace(/^['"]|['"]$/g, ''));
}

function parseBlockArray(lines: string[], startIndex: number): { items: string[]; nextIndex: number } {
  const items: string[] = [];
  let index = startIndex;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.startsWith('  - ') && !line.startsWith('- ')) break;
    const item = line.replace(/^\s*-\s*/, '').trim().replace(/^['"]|['"]$/g, '');
    if (item) items.push(item);
    index += 1;
  }

  return { items, nextIndex: index };
}

function parseSimpleYaml(yamlBlock: string): Record<string, FrontmatterValue> {
  const data: Record<string, FrontmatterValue> = {};
  const lines = yamlBlock.split(/\r?\n/);
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    index += 1;

    if (!line.trim() || line.trim().startsWith('#')) continue;

    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;

    const key = match[1];
    const rawValue = match[2].trim();

    if (!rawValue) {
      const block = parseBlockArray(lines, index);
      data[key] = block.items;
      index = block.nextIndex;
      continue;
    }

    if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
      data[key] = parseInlineArray(rawValue);
      continue;
    }

    data[key] = rawValue.replace(/^['"]|['"]$/g, '');
  }

  return data;
}

export function parseFrontmatter(source: string): ParsedFrontmatter {
  const trimmed = source.replace(/^\uFEFF/, '');

  if (!trimmed.startsWith('---')) {
    return { data: {}, body: trimmed };
  }

  const closingIndex = trimmed.indexOf('---', 3);
  if (closingIndex === -1) {
    return { data: {}, body: trimmed };
  }

  const yamlBlock = trimmed.slice(3, closingIndex).trim();
  const body = trimmed.slice(closingIndex + 3).replace(/^\r?\n/, '');

  return {
    data: parseSimpleYaml(yamlBlock),
    body,
  };
}

export function getStringField(
  data: Record<string, FrontmatterValue>,
  key: string,
  fallback = '',
): string {
  const value = data[key];
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value[0] ?? fallback;
  return fallback;
}

export function getStringArrayField(
  data: Record<string, FrontmatterValue>,
  key: string,
): string[] {
  const value = data[key];
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'string' && value) return [value];
  return [];
}
