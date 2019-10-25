const reqImgs = require.context(".", true, /\.png$/);
const paths = reqImgs.keys();
const imgs = paths.map(path => {
  return {
    path: path.replace(/^.\/(\w+)\.png$/g, "$1"),
    img: reqImgs(path),
    clicked: false,
  };
});

export default imgs;
