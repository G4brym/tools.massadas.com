export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/convert-to-markdown" && request.method === "POST") {
      return handleConvert(request, env);
    }

    // All other requests fall through to static assets
    return new Response("Not found", { status: 404 });
  },
};

async function handleConvert(request, env) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return Response.json({ error: "No file provided" }, { status: 400 });
    }

    const result = await env.AI.toMarkdown([
      {
        name: file.name,
        blob: new Blob([await file.arrayBuffer()], { type: file.type }),
      },
    ]);

    const doc = result[0];

    if (doc.format === "error") {
      return Response.json({ error: doc.error || "Conversion failed" }, { status: 422 });
    }

    return Response.json({
      name: doc.name,
      markdown: doc.data,
      tokens: doc.tokens,
      mimetype: doc.mimetype,
    });
  } catch (err) {
    return Response.json({ error: err.message || "Internal error" }, { status: 500 });
  }
}
