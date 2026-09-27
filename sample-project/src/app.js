// app.js — intentionally contains 5 planted issues for RepoMD demo

// BUG 1: No docstring / JSDoc (Documentation gap)
function calculatePrice(quantity, unitPrice) {
  let total = quantity * unitPrice;
  return total;
}

// BUG 2: Duplicate logic — same calculation repeated instead of reused
function calculateDiscountedPrice(quantity, unitPrice, discount) {
  let total = quantity * unitPrice; // duplicate of calculatePrice's core logic
  let finalPrice = total - (total * discount);
  return finalPrice;
}

// BUG 3: Dead code — unreachable statement after return
function logOrderSummary(orderId, amount) {
  console.log(`Order ${orderId} confirmed: $${amount}`);
  return true;
  console.log("This line never runs"); // dead code
}

// BUG 4: High cyclomatic complexity (too many branches in one function)
function getShippingCost(country, weight, isExpress, isMember, hasCoupon) {
  let cost = 0;
  if (country === "US") {
    if (weight > 10) {
      cost = 20;
    } else {
      cost = 10;
    }
  } else if (country === "CA") {
    if (weight > 10) {
      cost = 25;
    } else {
      cost = 15;
    }
  } else {
    if (weight > 10) {
      cost = 40;
    } else {
      cost = 30;
    }
  }
  if (isExpress) {
    cost = cost + 15;
  }
  if (isMember) {
    cost = cost - 5;
  }
  if (hasCoupon) {
    cost = cost - 3;
  }
  return cost;
}

// BUG 5: Exported function with zero test coverage anywhere in the repo
function applyBulkDiscount(orders) {
  return orders.map(order => {
    if (order.quantity >= 100) {
      order.price = order.price * 0.9;
    }
    return order;
  });
}

module.exports = {
  calculatePrice,
  calculateDiscountedPrice,
  logOrderSummary,
  getShippingCost,
  applyBulkDiscount
};
