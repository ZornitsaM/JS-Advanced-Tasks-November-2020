// function x(a,b) {

//     let obj = {
//         add: function (a,b) {
//             let result = [a[0] + a[1], b[0] + b[1]]
//             return result
//         },
//         multiply: function (a,b) {
//             let result=[a[0]*b, a[1]*b]
//             return result
//         },
//         length: function (a) {
//             let result = Math.sqrt(a[0]*a[0] + a[1]*a[1])
//             return result;
//         },
//         dot: function (a,b) {
//             let result = a[0]*a[1] + b[0]*b[1];
//             return result;
//         },
//         cross: function (a,b) {
//             let result=a[0]*b[1] - a[1]*b[0];
//             return result;
//         }

//     };

//     return obj;
// }




(function() {

    return {
        add: (arr1, arr2) => {
          result = [arr1[0] + arr1[1], arr2[0] + arr2[1]]
            return result
        },

        multiply: (arr1, arr2) => {
          result = [arr1[0]*arr2, arr1[1]*arr2]
          return result
        },
        
        length: function (arr1) {
            let result = Math.sqrt(arr1[0]*arr1[0] + arr1[1]*arr1[1])
            return result;
        },
        dot: function (arr1, arr2) {
            let result = arr1[0]*arr1[1] + arr2[0]*arr2[1];
            return result;
        },
        cross: function (arr1, arr2) {
            let result=arr1[0]*arr2[1] - arr1[1]*arr2[0];
            return result;
        }

    }
}())