import express from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

const router = express.Router();

router.get("/formdata", async (req, res) => {
  const allData = await prisma.user.findMany();
  console.log(allData);
  return res.json(allData).status(200);
});

router.post("/formdata", async (req, res) => {
  if (!req.body) return res.json({ message: "nothing came" }).status(400);
  const recievedData = req.body;
  const id = uuidv4();
  const user = await prisma.user.create({
    data: {
      name: recievedData.name,
      age: recievedData.dob,
      sex: recievedData.sex,
      Mobile: recievedData.mobile,
      id,
      City: recievedData.city,
      State: recievedData.state,
      MariatalStatus: recievedData.maritalStatus,
      Address: recievedData.address,
      Country: recievedData.country,
      Pincode: recievedData.pincode,
      Religion: recievedData.religion,
      BloodGroup: recievedData.bloodGroup,
      GovtIdType: recievedData.govtIdType,
      Occupation: recievedData.occupation,
      Nationality: recievedData.nationality,
      GovtIdNumber: recievedData.govtId,
      GuardianName: recievedData.guardianName,
      GuardianType: recievedData.guardianLabel,
      GuardianEmail: recievedData.guardianEmail,
      GuardianMobile: recievedData.guardianMobile,
    },
  });
  console.log("User created: ", user);
  return res.status(201).json({ message: "User created" });
});

export default router;
