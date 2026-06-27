@echo off
setlocal EnableExtensions

REM One-time install: engine + node_modules go in E:\webpconvert\
REM (npm cannot install to a drive root on Windows)

set "SOURCE=%~dp0"
set "INSTALL_DIR=E:\webpconvert"
set "LAUNCHER=E:\webpconvert.bat"

echo Installing webpconvert ...
echo   Engine:   %INSTALL_DIR%\
echo   Launcher: %LAUNCHER%
echo.

if not exist "E:\" (
  echo ERROR: Drive E: is not available.
  exit /b 1
)

if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%"
if errorlevel 1 goto :failed

copy /Y "%SOURCE%webpconvert.mjs" "%INSTALL_DIR%\webpconvert.mjs"
if errorlevel 1 goto :failed
copy /Y "%SOURCE%package.json" "%INSTALL_DIR%\package.json"
if errorlevel 1 goto :failed
copy /Y "%SOURCE%webpconvert.bat" "%LAUNCHER%"
if errorlevel 1 goto :failed

pushd "%INSTALL_DIR%"
call npm install --omit=dev
set "ERR=%ERRORLEVEL%"
popd

if not "%ERR%"=="0" (
  echo ERROR: npm install failed.
  exit /b 1
)

REM Remove files from an older root-level install attempt, if present.
if exist "E:\webpconvert.mjs" del /Q "E:\webpconvert.mjs" >nul 2>&1
if exist "E:\package.json" del /Q "E:\package.json" >nul 2>&1

echo.
echo Done.
echo   Copy %LAUNCHER% into any image folder and run it.
exit /b 0

:failed
echo.
echo ERROR: Could not write to E:\
echo Try running this script as Administrator.
exit /b 1
