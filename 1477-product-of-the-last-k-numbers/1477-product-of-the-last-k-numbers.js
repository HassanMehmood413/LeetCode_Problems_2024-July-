
var ProductOfNumbers = function () {
    this.product = 1
    this.products = []
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
    if (num == 0) {
        this.products = []
        this.product = 1
    }
    else {
        this.product *= num
        this.products.push(this.product)
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
    let len = this.products.length
    if (k > len) return 0
    if (k == len) return this.product
    return this.products[len - 1] / this.products[len - 1 - k]
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */