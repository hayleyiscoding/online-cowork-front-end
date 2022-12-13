import { table, getMinifiedItem } from "../../utils/AirtableProfiles";

const handler = async (req, res) => {
  const fields = req.body;
  try {
    const newRecords = await table.create([
      {
        fields,
      },
    ]);
    res.status(200).json(getMinifiedItem(newRecords[0]));
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};

export default handler;
