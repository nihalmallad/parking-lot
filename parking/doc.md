# Parking Lot API Design Documentation
## POST `api/v1/parking`
This will set up a new Parking lot. This API needs to be called on initialising the system.
```json
    body {
        "slots":6
    }
```

200 OK: 

```
    response {
        "total_slots":6
    }
```

## PATCH `api/v1/parking`  
This will add more slots into the Parking lot.
```json
    body {
        "slots":6
    }
```

200 OK: 

```
    response {
        "total_slots":6
    }
```    

## POST `api/v1/parking/park`
This will allocate a parking slot to a car. Throw an error if the parking lot is already full.
```json    
    body {
        "car_reg_no":"KA-01-AB-2211",
        "car_color":"white"
    }
```
200 OK
```
    response {
        "slot_number":1
    }
```
400 Bad Request
```
    response {
        "error_message": "no parking lot available"
    }
```

## GET `api/v1/parking?color=<color>`
This will fetch all the cars with a particular color.

200 OK
```json
    response 
    [
       {
        "slot_number": 1,
        "car_reg_no":"KA-01-AB-2211",
        "car_color":"white"
       },

       {
        "slot_number": 2,
        "car_reg_no":"KA-02-AB-2211",
        "car_color":"red"
       }
    ]
```

## GET `api/v1/parking/slot?color=<color>`
This will fetch all the parking slots where a car of particular color is parked.
```json
   [
       {
        "slot_number": 1,
        "car_reg_no":"KA-01-AB-2211",
       },

       {
        "slot_number": 2,
        "car_reg_no":"KA-02-AB-2211",
       }
    ]
```

## DELETE  
## `api/v1/parking/slot/:number`
## `api/v1/parking/slot?car-reg-number=<number>`

This will free a parking slot based on slot number or car registration number. Throws an error
if the parking slot was already free or a car with that registration number is not found in the
parking.
```json
    body 1 {
        "slot_number":1
    }

    body 2 {
        "car_registration_no":"KA-01-AB-2211",
    }

    200 response {
        "slot_number":1
    }

    404 response "not found"
```

## GET `api/v1/parking/slot`
This will fetch all the occupied slots in the parking lot.

```json
    response [
        {
        "slot_no":1,
        "car_registration_no":"KA-01-HH-1234",
        "color":"red"
        },
        {
        "slot_no":2,
        "car_registration_no":"KA-01-HH-1235",
        "color":"blue"
        },
        {
        "slot_no":4,
        "car_registration_no":"KA-01-HH-1236",
        "color":"black"
        },
        {
        "slot_no":5,
        "car_registration_no":"KA-01-HH-1237",
        "color":"green"
        }
    ]
```