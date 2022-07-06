import {css, html, LitElement} from 'lit';
import sharedStyles from '../styles/shared-styles';
import pageStyles from '../styles/page-styles';

class TEam extends LitElement {
    static styles = [
        sharedStyles,
        pageStyles,
        css`
            :host {
                padding: 0;
            }

            i-con {
                vertical-align: -1px;
            }

            h1 {
                margin-top: 0;
                padding-top: 15px;
            }

            header > div,
            section > article {
                max-width: 1100px;
                margin: 0 auto;
            }

            header {
                background: var(--light-primary-color);
                margin-bottom: 25px;
                padding-bottom: 25px;
            }

            header img {
                margin-right: 15px;
            }

            section {
                padding: 15px;
            }

            article {
                display: flex;
                gap: 15px;
            }

            article .img {
                min-width: 250px;
            }

            @media (max-width: 810px) {
                header {
                    text-align: center;
                }

                header article {
                    place-content: center;
                }

                article {
                    flex-wrap: wrap;
                }
            }
        `
    ];

    render = () => html`
        <header>
            <div>
                <h1>
                    <i-con name="users" color="rgba(0, 0, 0, 0.8)" no-hover></i-con>&nbsp;
                    UA Team
                </h1>
                <article>
                    <div>
                        <img src="img/meet_team.jpg" width="300" height="404">
                    </div>
                    <p>
                        Let's unlock your potential to maximize your performance!
                    </p>
                </article>
            </div>
        </header>

        <section>
            <article>
                <div class="img">
                    <img src="img/meet_jamie_shawn.jpg" width="250" height="380">
                </div>
                <div>
                    <h2>Shawn Catlett</h2>
                    <p>
                        In high school I was always active and played sports. After high school I found myself gaining weight and ended up with Type 2 Diabetes. I knew that I needed to make a change, so I changed my lifestyle to reflect healthier living.
                        I started with obstacle course racing and weight training with hopes that it would help my diabetes diagnosis. About 5 years ago I walked into a CrossFit gym to learn how to climb a rope for the obstacle course racing and fell in love with the energy and vibe
                        of CrossFit. I knew not only that I wanted to do be a part of it, but I also wanted to help others understand the goals they had were achievable. This inspired me to combine the two things I love, weight training and CrossFit style workouts, which resulted
                        in a hybrid fitness that everyone can do. This started as a small group and has now grown into the gym we have today, where my wife and I, along with our team, are able to change people's lives. We feel incredibly lucky to be able to share our passion with
                        others.
                        <br><br>
                        CFL1
                    </p>
                    <!-- img/meet_jamie.jpg -->
                    <h2>Jamie Catlett</h2>
                    <p>
                        I found a love for sports while in school. After school, I found a love for coaching sports and helping others be successful. Because of our business, Underground Athletics, my daughter has also found a passion for the hybrid workouts
                        our gym creates. I have coached all her sports from day one, which has inspired me to get my CFL1 to be a better coach for her at our gym.
                    </p>
                </div>
            </article>
        </section>

        <section>
            <article>
                <div class="img">
                    <img src="img/meet_danielle.jpg" width="250" height="380">
                </div>
                <div>
                    <h2>Danielle Cunningham</h2>
                    <p>
                        I have been working out and participated in CrossFit for 4 years. I have my CrossFit L1, programming cert
                        through CrossFit, judge's cert through CrossFit and Bergener Strength level 1.
                        About me: I played soccer throughout my school years. After high school I took a break from exercise to
                        pursue a degree but fell off that wagon. Had some very personal struggles with mental health and spent
                        years in a very dark place. Once I was in a better place mentally and emotionally, I was pregnant with
                        my first child. That was a very complicated pregnancy and I ended up being put on bed rest. I tried to get
                        back into shape after that and it proved to be much more difficult than I thought. I spent 3 years trying
                        all the fad diets at the time and trying to find a “quick fix” for my excessive weight gain. Then I found
                        myself pregnant with my second child and again was put on bed rest. After this I had lost all hope for
                        ever being fit and healthy again. I gave up all together. I saw an ad on Facebook for women seeking
                        fitness. It was for women only, so I decided to give it a shot. Little did I know this is where my life would
                        change forever. I went to meet with the person running this
                        "women only" program. I walked in the door and saw people doing crazy things. I turned around to walk
                        out and I hear someone call my name and say, "Hey! I'm Rob. Come into my office and let's talk about
                        your journey!"" Had that not happened I have no idea where I'd be today. I did a 6-week challenge and
                        I've stuck with it ever since. I've gained so much knowledge and so much has happened for the better
                        for me. Now I'm motivated by helping others on their journey to being fitter and healthier!
                        My favorite part of UA is the daily opportunity I get to better my life, my kids lives and the lives of the
                        members! To me there is nothing better than a momma showing her kids healthy habits and mirroring
                        for them all the great possibilities life can give them!

                        <br><br>
                        Favorite quote: "The hardest workout is the one you never do" MANY big names in CrossFit have said
                        this quote and it resonates with me!
                    </p>
                </div>
            </article>
        </section>

        <section>
            <article>
                <div class="img">
                    <img src="img/meet_cheyenne.jpg" width="250" height="380">
                </div>
                <div>
                    <h2>Cheyenne Peterson</h2>
                    <p>
                        I have been working out and participated in CrossFit for about 4 years. Being a college athlete I have
                        always had a passion for working out and competing. I love the community feel that Underground
                        Athletics has. Everyone is so friendly and judgement free. All of our members are there to work hard and
                        have fun.
                        <br><br>
                        Favorite quote: "Discipline is the pathway to freedom." Jocko Willink
                    </p>
                </div>
            </article>
        </section>

        <section>
            <article>
                <div class="img">
                    <img src="img/meet_bud.jpg" width="250" height="380">
                </div>
                <div>
                    <h2>Andrew (Bud) Jones</h2>
                    <p>
                        I have been working out and participated in CrossFit for about 2.5 years. I have scoliosis, but that
                        doesn't stop my positive attitude or sense of humor. I am a nerd that builds drones in my spare time. My
                        motivation to start working out was wanting to be able to do a pull-up. I used to weigh over 300lbs and
                        through healthy eating habits and physical fitness, I have lost over 125lbs, and have gained a lot of
                        muscle. I love helping and encouraging people; we are all capable of great things and I like to ensure
                        everyone knows that. The best part of UA is the friendly atmosphere and great people.
                    </p>
                </div>
            </article>
        </section>
    `;
}

customElements.define('t-eam', TEam);
