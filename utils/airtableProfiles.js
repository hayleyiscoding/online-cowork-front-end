const Airtable = require("airtable");

// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_TOKEN,
});

// Initialize a base
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

// Reference a table
const table = base(process.env.AIRTABLE_PROFILES_TABLE_NAME);

// To get minified records array
const minifyProfiles = (records) =>
  records.map((record) => getMinifiedProfile(record));

// to make record meaningful.
const getMinifiedProfile = (record) => {
  if (!record.fields.brought) {
    record.fields.brought = false;
  }
  return {
    id: record.id,
    fields: record.fields,
  };
};

export { table, minifyProfiles, getMinifiedProfile };
