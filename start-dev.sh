#!/bin/bash

# Kill any existing processes on port 3000
echo "Killing any processes on port 3000..."
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9 2>/dev/null || echo "No process running on port 3000"

# Start the development server
echo "Starting the development server..."
npm run dev 