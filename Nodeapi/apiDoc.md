http://localhost:8520/ -- home

http://localhost:8520/location --location
http://localhost:8520/location/1 --location with location_id

http://localhost:8520/rest  --- restdata
http://localhost:8520/rest/2 ---restdata with restaurant_id

http://localhost:8520/mealtype  --- mealtypedata
http://localhost:8520/mealtype/2 --- mealtypedata with mealtype_id

http://localhost:8520/restmenu  ---restuarantMenu 
http://localhost:8520/restmenu/4  ---restuarantMenu with menu_id

restaurants with respect to state_id
http://localhost:8520/restaurants?state=state_id
e.g.: http://localhost:8520/restaurants?state=1


listing page apis
get the menus in bulk/array
http://localhost:8520/menus

get the restaurants wrt mealtype_id and cuisine_id
http://localhost:8520/filter/1?cuisines=2

get the restaurants wrt mealtype_id and cuisine_id and with lcost and hcost and sorting restaurants
http://localhost:8520/filter/1?cuisines=2&&locst=300&&hcost=700

order api
http://localhost:8520/orders

placeOrder api
http://localhost:8520/placeOrder

delete api
http://localhost:8520/deleteOrder   --- to delete one order wrt id
http://localhost:8520/deleteAllOrders -- to delete all orders
