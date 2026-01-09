# Building
`docker run --mount type=bind,source=.,target=/app`
`docker build -t portfolio . `

# Running
`docker run -p 3000:3000 portfolio --mount type=bind,source=.,target=/app`

# References
Built in part with help from https://github.com/gitname/react-gh-pages