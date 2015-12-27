(function() {
  var scene = new THREE.Scene();
  var width = 400;
  var height = 300;
  var color = 'white';

  var geometry = new THREE.BoxGeometry(150, 150, 150);
  var material = new THREE.MeshLambertMaterial({ color: color });
  var box = new THREE.Mesh(geometry, material);
  box.position.set(0, 0, 0);
  scene.add(box);

  var camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000);
  camera.position.set(0, 0, 400);
  camera.lookAt(box.position);

  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 100, 30);
  scene.add(light);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(400, 300);
  renderer.setClearColor(0xffffff, 1);
  document.getElementById('image').appendChild(renderer.domElement);

  function render() {
    requestAnimationFrame(render);

    var speedElement = document.getElementById('speed');
    var speed = parseFloat(speedElement.value) || 0;
    box.rotation.y += (speed / 100.0) * Math.PI / 180;
    speedElement = null;

    renderer.render(scene, camera);
  }
  render();
})();
