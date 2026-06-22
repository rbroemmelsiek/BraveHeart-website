import React from 'react';
import { Link } from 'react-router-dom';
import {
  CONTACT_SECTION_ID,
  contactSmsHref,
  contactTelHref,
} from '../../config/contact';

const contactPath = { pathname: '/', hash: `#${CONTACT_SECTION_ID}` } as const;

export default function MobileContactBar() {
  return (
    <div
      className="2xl:hidden fixed bottom-0 inset-x-0 z-[9998] glass-nav border-t border-outline-variant/20 safe-area-pb"
      aria-label="Quick contact actions"
    >
      <div className="flex items-stretch justify-center divide-x divide-outline-variant/20 max-w-lg mx-auto">
        <a
          href={contactSmsHref()}
          className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-[10px] uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-lg mb-0.5" aria-hidden="true">
            sms
          </span>
          Text
        </a>
        <a
          href={contactTelHref()}
          className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-[10px] uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-lg mb-0.5" aria-hidden="true">
            call
          </span>
          Call
        </a>
        <Link
          to={contactPath}
          className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-[10px] uppercase tracking-widest text-on-surface hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-lg mb-0.5" aria-hidden="true">
            contact_mail
          </span>
          Contact
        </Link>
      </div>
    </div>
  );
}
