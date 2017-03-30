webpack --optimize-minimize
cp src/header.html dist/header.html
cat src/demo-start.html src/header.html src/demo-end.html > demo/index.html
