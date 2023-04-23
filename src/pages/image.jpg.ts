import fs from 'node:fs';

export function get() {
  const buffer = fs.readFileSync('../image.jpg');

  // Return the buffer directly, @astrojs/netlify will base64 encode the body
  return new Response(buffer, {
    status: 200,
    headers: {
      'content-type': 'image/jpeg'
    }
  });
}