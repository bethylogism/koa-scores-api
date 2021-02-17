const t = require('koa-joi-router');
const docs = require('koa-docs');

const WeeklyScores = t.object().label('WeeklyScoresRequest').keys({});

module.exports = () =>
  docs.get('/docs', {
    title: 'Team Scores API',
    version: '1.0.0',
    theme: 'simplex',
    routeHandlers: 'disabled',
    groups: [],
  });
