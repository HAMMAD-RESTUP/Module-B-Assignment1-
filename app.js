
let mobiles = {
    apple: {
        iphone13: {
            model: 'iphone 13',
            color: 'black',
            price: 1000,
            camera: 20,
            battery: 500,
        },
        iphone12: {
            model: 'iphone 12',
            color: 'red',
            price: 800,
            camera: 15,
            battery: 400,
           
        }
    },
    samsung: {
        s10: {
            model: 'Samsung S10',
            color: 'black',
            price: 500,
            camera: 10,
            battery: 600,
        },
        a10: {
            model: 'Samsung A10 ',
            color: 'blue',
            price: 300,
            camera: 20,
            battery: 150,
        }
    },
    moto: {
        motoz: {
            model: 'Moto Z',
            color: 'black',
            price: 500,
            camera: 10,
            battery: 300,
        },
        motoe4: {
            model: 'Moto E4',
            color: 'black',
            price: 200,
            camera: 10,
            battery: 300,
        }
    },

    techno: {
        camon18: {
            model: 'Camon 18',
            color: 'golden',
            price: 5000,
            camera: 10,
            battery: 300,
        },
        spark7: {
            model: 'Spark 7',
            color: 'sky blue',
            price: 2000,
            camera: 10,
            battery: 300,
        }
    }
}


function demo () {
    let brandName = document.getElementById('brand-name').value
    let modelName = document.getElementById('model-name').value
    
    if (mobiles[brandName] !== undefined) {
        if (mobiles[brandName][modelName] !== undefined) {
            document.getElementById('content').innerHTML = JSON.stringify(mobiles[brandName][modelName]);
        }

        else {
            document.getElementById('content').innerHTML = 'This model is not available';
        }
    }
    else if (brandName == '' || modelName == '') {
        document.getElementById('content').innerHTML='Please Enter The BrandName Or Model';
    }
    else {
        document.getElementById('content').innerHTML='This model is not available';
    }
    
};