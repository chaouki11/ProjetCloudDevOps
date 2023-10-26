import si from "systeminformation";

export interface ISystemInformation {
  cpu: si.Systeminformation.CpuData;
  system: si.Systeminformation.SystemData;
  mem: si.Systeminformation.MemData;
  osInfo: si.Systeminformation.OsData;
  currentLoad: si.Systeminformation.CurrentLoadData;
  processes: si.Systeminformation.ProcessesData;
  diskLayout: si.Systeminformation.DiskLayoutData[];
 // networkInterfaces: si.Systeminformation.NetworkInterfacesData[];
}

export async function getSystemInformation(): Promise<ISystemInformation> {
  const systemInformation: ISystemInformation = {
    cpu: await si.cpu(),
    system: await si.system(),
    mem: await si.mem(),
    osInfo: await si.osInfo(),
    currentLoad: await si.currentLoad(),
    processes: await si.processes(),
    diskLayout: await si.diskLayout(),
    //networkInterfaces: await si.networkInterfaces(),
  };

 

  return systemInformation;
  
}
//export {si};
