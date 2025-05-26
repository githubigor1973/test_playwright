#!/bin/bash
PORT=9323
PID=$(lsof -t -i:$PORT)
if [ -n "$PID" ]; then
  kill -9 $PID
fi
npx playwright show-report
