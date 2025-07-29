
Push-Location ./_dist;

nodemon                          `
  --watch ./ --ext css,html,js   `
  --exec "python -m http.server" `
  ;

Pop-Location;