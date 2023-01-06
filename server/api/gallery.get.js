import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const image_database_id = process.env.NOTION_DATABASE_ID;

let payload = [];

async function getImages() {
  const data = await notion.databases.query({
    database_id: image_database_id,
  });
  return data;
}

getImages().then((data) => {
  payload = data.results;
});

// isolate the urls from the results

function getUrls(results) {
  let urls = [];
  results.forEach((result) => {
    urls.push(result.properties.file.files[0].file.url);
  });
  return urls;
}

export default defineEventHandler(() => getUrls(payload));
