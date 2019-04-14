const mock = [{
    "id": 0,
    "firstName": "Tom",
    "lastName": "Chen",
    "age": "30",
    "contact": [{
      "line": "tmchen"
    }, {
      "email": "tmchen@gmail.com"
    }, {
      "facebook": "https://fb.com/chen"
    }]
  },
  {
    "id": 1,
    "firstName": "Tim",
    "lastName": "Tsai",
    "age": "30",
    "contact": [{
      "line": "timtsa"
    }, {
      "email": "tsssss@gmail.com"
    }, {
      "facebook": "https://fb.com/tsai"
    }]
  }
];

function flattenMock(mock){
  var ret = [];
  var obj = {};
  
  mock.forEach(function(m){
    obj = Object.assign({},m);
    delete obj.contact;
    var flattenContact = m.contact.reduce(function(a,v){
      a = Object.assign(v, a);
      return a;
    },{});
    Object.assign(obj, flattenContact)
    ret.push(obj);
  });
  return ret;
}

export default {
  mock: mock,
  flattenMock: flattenMock
};