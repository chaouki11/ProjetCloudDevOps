const { app, port } = require("./server");
import { getSystemInformation } from "./sysinfo";



app.listen(port, async () => {
    //console.log((await (getSystemInformation())).cpu);
  console.log(`Server is running on port ${port}`);
});
