import DataTable from "datatables.net-dt";
import { useEffect, useState } from "react";

const AllData = () => {
  const [data, setData] = useState<any[] | undefined>();

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
          console.log(modifiedData);
          setData(modifiedData);
        }
        modifyData(jsonData);

        new DataTable("#table", {
          data,
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
