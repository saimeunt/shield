TeamMembers = new Mongo.Collection(null);

[{
  name: 'Mike Arney',
  profileUrl: '/img/home/team/team1.jpg',
  description: 'Mike combines an expert technical knowledge with a real eye for design. Working ' +
    'with clients from a wide range of industries, he fully understands client objectives when ' +
    'working on a project, large or small.',
}, {
  name: 'Tim Davies',
  profileUrl: '/img/home/team/team2.jpg',
  description: 'Tim is an experienced marcoms practitioner and manages projects from inception ' +
    'to delivery. He understands the synergy between great design and commercial effectiveness ' +
    'which shines through on every project.',
}, {
  name: 'Michele Lampa',
  profileUrl: '/img/home/team/team3.jpg',
  description: 'Be a creative director is a hard task, but Michele loves what she does. Her ' +
    'combination of knowledge and expertise is an important pillar in our agency.',
}, {
  name: 'Jaye Smith',
  profileUrl: '/img/home/team/team4.jpg',
  description: 'Jaye began making websites when animated logos and scrolling text were cool, but ' +
    'has since found a love for simplicity, creating websites that are a pleasure to browse. ' +
    'Monkey Island Fan.',
}].forEach(teamMember => TeamMembers.insert(teamMember));

Template.team.helpers({
  teamMembers() {
    return TeamMembers.find();
  },
});
