def profit(info):
    totalProfit = info["inventory"] * (info["sell_price"] - info["cost_price"]) 
    return round(totalProfit)

print(profit({
  "cost_price": 32.67,
  "sell_price": 45.00,
  "inventory": 1200
})) 

print(profit({
  "cost_price": 225.89,
  "sell_price": 550.00,
  "inventory": 100
}) )

print(profit({
  "cost_price": 2.77,
  "sell_price": 7.95,
  "inventory": 8500
}))

