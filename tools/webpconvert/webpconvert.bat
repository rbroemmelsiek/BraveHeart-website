@echo off
setlocal EnableExtensions

REM Convert JPEG, PNG, and PDF files in THIS folder to WebP.
REM Copy webpconvert.bat into any folder, then run it there.

cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js was not found on PATH.
  echo Install Node.js from https://nodejs.org/
  exit /b 1
)

set "ENGINE="
set "DEPS="

if exist "E:\webpconvert\webpconvert.mjs" (
  set "ENGINE=E:\webpconvert\webpconvert.mjs"
  set "DEPS=E:\webpconvert"
)
if exist "E:\Dev\BraveHeart-website\tools\webpconvert\webpconvert.mjs" (
  set "ENGINE=E:\Dev\BraveHeart-website\tools\webpconvert\webpconvert.mjs"
  set "DEPS=E:\Dev\BraveHeart-website\tools\webpconvert"
)

if not defined ENGINE (
  echo ERROR: webpconvert engine not found.
  echo Run install-to-e.bat once: e:\Dev\BraveHeart-website\tools\webpconvert\install-to-e.bat
  exit /b 1
)

if not exist "%DEPS%\node_modules\sharp" (
  echo First-time setup: installing dependencies in %DEPS% ...
  pushd "%DEPS%"
  call npm install --omit=dev
  if errorlevel 1 (
    popd
    echo ERROR: npm install failed.
    exit /b 1
  )
  popd
)

node "%ENGINE%" "%CD%" %*
exit /b %ERRORLEVEL%
