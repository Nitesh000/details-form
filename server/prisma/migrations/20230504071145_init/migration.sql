-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "Mobile" TEXT,
    "GovtIdType" TEXT,
    "GovtIdNumber" TEXT,
    "GuardianType" TEXT,
    "GuardianName" TEXT,
    "GuardianMobile" TEXT,
    "GuardianEmail" TEXT,
    "Address" TEXT,
    "State" TEXT,
    "City" TEXT,
    "Country" TEXT,
    "Pincode" TEXT,
    "Occupation" TEXT,
    "Religion" TEXT,
    "MariatalStatus" TEXT,
    "BloodGroup" TEXT,
    "Nationality" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
