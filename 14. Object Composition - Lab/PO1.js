
function solve(input) {
    let output = [];
    let result = input.map(([width, height]) => ({

        width,
        height,
        area: function () {
            return width * height;
        },

        compareTo: function (other) {

        let result =  this.area() - other.area();
        return result==0 ?  this.width-other.width : result;
        }
    }));

    result.sort((a,b)=>{

         return b.compareTo(a);
    })
 
    output.push(result);
    return output;
}

solve([[10,5], [3,20], [5,12]])



