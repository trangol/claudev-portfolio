/**
 * GET /api/projects/:id
 *
 * Función serverless Vercel — lookup de un proyecto por su ID.
 * Vercel extrae el segmento dinámico como req.query.id
 */
const { projects } = require('../_data');

module.exports = function handler(req, res) {
  const allowedOrigins = [
    'https://sielco.cl',
    'https://claudev.sielco.cl',
    'https://www.sielco.cl',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ success: false, message: 'Method not allowed' });

  try {
    const { id } = req.query;
    const project = projects.find(p => p.id === id);

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    return res.status(200).json({ success: true, data: project });
  } catch (err) {
    console.error('[api/projects/[id]] Error:', err);
    return res.status(500).json({ success: false, message: 'Error retrieving project' });
  }
};
