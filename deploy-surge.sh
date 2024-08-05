# Build project react app
npm run build

# Move to build folder 
cd dist

# Clone index.html to 200.html
cp index.html 200.html

# Start deploy via Surge
surge . onmovie.surge.sh

