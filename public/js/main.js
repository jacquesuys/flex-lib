var $ = function(el) {
  return document.querySelectorAll(el);
};

var _each = function(arr, iterator) {
  arr = Array.prototype.slice.call(arr);
  for (var i = 0; i < arr.length; i++) {
    iterator(arr[i], i, arr);
  }
};

var clickActivate = function(element, modifier) {
  _each($(element), function(e){
    e.addEventListener('click', function(){
      _each($(element), function(e){
        e.classList.remove(modifier);
      });
      this.classList.add(modifier);
    });
  });
};

function main() {
  clickActivate('.tab', 'is-tab-selected');
  clickActivate('.siteHeader__item', 'is-site-header-item-selected');
}

document.addEventListener('DOMContentLoaded', main);