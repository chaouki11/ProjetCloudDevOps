import express, { Request, Response } from "express";
import { getSystemInformation } from "./sysinfo";

const app = express();
const port = 3000;

app.get("/api/v1/sysinfo", async (req, res) => {
  try {
    const systemInformation = await getSystemInformation();
    res.json(systemInformation);
  } catch (error) {
    res.status(500).json({ error: "Impossible d'obtenir system information" });
  }
});

app.get("/api/v1/cpu", async (req, res) => {
  try {
    const cpuInfo = (await getSystemInformation()).cpu;
    res.json(cpuInfo);
  } catch (error) {
    res.status(500).json({ error: "Impossible d'obtenir CPU information" });
  }
});

app.get("/api/v1/mem", async (req, res) => {
  try {
    const memInfo = (await getSystemInformation()).mem;
    res.json(memInfo);
  } catch (error) {
    res.status(500).json({ error: "Impossible d'obtenir memory information" });
  }
});

app.get("/api/v1/osInfo", async (req, res) => {
  try {
    const osInfo = (await getSystemInformation()).osInfo;
    res.json(osInfo);
  } catch (error) {
    res.status(500).json({ error: "Impossible d'obtenir OS information" });
  }
});

app.get("*", (req, res) => {
  res.status(404).json("on est sur l'app sysinfo");
});

export { app, port };
