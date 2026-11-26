@echo off
title GoldenPro - Control de Vencimientos
cd /d "%~dp0"
cls
echo ================================================================
echo       GOLDENPRO - CONTROL DE CUENTAS Y VENCIMIENTOS
echo ================================================================
echo.
echo Iniciando servidor local en http://localhost:3000 ...
echo Abriendo tu navegador predeterminado...
echo.

start "" "http://localhost:3000"

"C:\Program Files\nodejs\node.exe" server.js

pause
