import DataTable from "datatables.net-dt";
import { useEffect } from "react";
import "./AllData.css";

const AllData = () => {
  useEffect(() => {
    fetch("http://localhost:3000/api/formdata")
      .then((res) => res.json())
      .then((jsonData) => {
        {
          /* NOTE: Function to modify the data as for the dataset
           */
        }
        function modifyData(data: any) {
          const modifiedData = data.map((item: any) => {
            const genderAge = `${item.sex} / ${item.age}`;
            const address = `${item.Address}, ${item.City}, ${item.State}, ${item.Country}`;
            return [
              item.name,
              genderAge,
              item.Mobile,
              address,
              item.GovtIdNumber,
              item.GuardianName,
              item.Nationality,
            ];
          });
          return modifiedData;
        }
        console.log("1");
        const newData = modifyData(jsonData);
        console.log("2");
        new DataTable("#table", {
          data: newData,
          columns: [
            { title: "Name" },
            { title: "Age / Sex" },
            { title: "Mobile" },
            { title: "Address" },
            { title: "Govt. ID" },
            { title: "Guardian Details" },
            { title: "Nationality" },
          ],
          stateSave: true,
          destroy: true,
        });
      });
  }, []);
  return (
    <div>
      <table id="table" width="100%"></table>
    </div>
  );
};

export default AllData;
