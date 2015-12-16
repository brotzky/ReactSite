var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="paper-writing">
        <h1 className="paper-main-heading">Introduction</h1>
        <p>In my opinion, forms are one of the greatest pain points for users on the internet. They&#8217;re annoying to fill out, the requirements are always different depending on the website, it&#8217;s impossible to remember the details of all the fields, and they rarely provide quality error feedback. So, with the launch of the new Lightspeed website I took it upon myself to make our forms simple and straightforward.</p><h2>Disclaimer: the length of our forms</h2><p>Okay, since day 1 at Lightspeed I have been an advocate of reducing the length of our forms &mdash; especially our mobile forms. In the end, the fields to display are not up to me. I have been given 7-8 input fields to work with per form. Ideally, I would like to see the forms starting off with 2-3 input fields and progressively asking for more information as the user matures.</p><h2>Research</h2><p>The first step to improve our forms was to research what was wrong with them. For this, I used tools such as Hotjar and Mouseflow to watch recordings of users interacting with our forms. I also used Optimizely to get a sense of possible little tweaks that could help improve the conversion rate. I finally went into Google Analytics to get a better sense of our baseline conversion rate for different forms.</p><p>After spending a few days watching users interact with our form I was starting to see common patterns. The main friction point was users entering their phone number incorrectly or not at all. They would only find out their phone number input was incorrect on submission. More often than not, users would also use a fake phone number such as 555-555-5555. The second thing I noticed was that users would often skip over fields either on purpose or by mistake. Once again, they would only find out they had incorrectly completed the form  upon submission. When a user received an error on submission more then 35% would simply leave the page without attempting to fix their mistake.</p><h2>Implementation</h2><p>The first thing to do was to redesign a cleaner form. For this, I worked with a designer who stripped away all the unnecessary clutter and created a well aligned form. With all the requested input fields in place, it was time to start building a positive user experience around the form.</p>
      </div>
    );
  },
});


