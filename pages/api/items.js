import { table, minifyItems } from "../../utils/Airtable";

export default async (_req, res) => {
  try {
    const records = await table
      .select({
        // Selecting the first 30 records in Grid view:
        maxRecords: 30,
        view: "Grid view",
      })
      .firstPage();
    const minfiedItems = minifyItems(records);
    res.status(200).json(minfiedItems);
  } catch (error) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong! 😕" });
  }
};
