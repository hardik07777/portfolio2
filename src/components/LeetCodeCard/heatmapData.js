const rows = 7;
const cols = 44;

const heatmap = [];

for (let c = 0; c < cols; c++) {

    for (let r = 0; r < rows; r++) {

        let value = 0;

        const random = Math.random();

        if(random>.82) value=4;
        else if(random>.67) value=3;
        else if(random>.50) value=2;
        else if(random>.35) value=1;

        heatmap.push({

            id:`${c}-${r}`,

            level:value

        });

    }

}

export default heatmap;