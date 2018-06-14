<template>
  <div v-if="tournament != null">
    <!-- MENU -->
    <sidebar :tournamentsIsActive='isActive'></sidebar>
    
    <!-- TOOLBAR -->
    <v-flex xs10 offset-xs2>
      <v-toolbar>
        <v-toolbar-items class="toolbarIcn">
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-flex>

    <!-- TOURNAMENTS DETAILS -->
    <v-flex xs10 offset-xs2 class="tournamentDetailDiv">
      <h1 class="tournamentName">{{tournament.name}}</h1>
      <div class="tournament-bracket tournament-bracket--rounded">
        <div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
          <h3 class="tournament-bracket__round-title">Eightfinals</h3>
          <ul class="tournament-bracket__list">
            <li class="tournament-bracket__item" v-for="match in tournament.matches.slice(0, 8)" v-bind:key="match._id">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="">{{ new Date(match.createdAt).toDateString() }}</time>
                  </caption>
                  <thead class="sr-only">
                    <tr>
                      <th>Country</th>
                      <th>Score</th>
                    </tr>
                  </thead>  
                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team" v-for="player in match.players" v-bind:key="player._id" v-bind:class="{ tournamentBracketTeamWinner: player._id == '5b1e330779ea5b022c54fa03' }">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="CountryCode">{{ player.lastname }}</abbr>
                        <span class="tournament-bracket__flag flag-icon" aria-label="Flag" :class="setCountryCode(player.countryCode)"></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">{{ false || 0 }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--quarterfinals">
          <h3 class="tournament-bracket__round-title">Quarterfinals</h3>
          <ul class="tournament-bracket__list" v-if='tournament.matches.length > 8'>
            <li class="tournament-bracket__item" v-for="match in tournament.matches.slice(8, 12)" v-bind:key="match._id">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="">{{ new Date(match.createdAt).toDateString() }}</time>
                  </caption>
                  <thead class="sr-only">
                    <tr>
                      <th>Country</th>
                      <th>Score</th>
                    </tr>
                  </thead>  
                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team" v-for="player in match.players" v-bind:key="player._id" v-bind:class="{ tournamentBracketTeamWinner: player._id == '5b1e330779ea5b022c54fa03' }">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">{{ player.lastname }}</abbr>
                        <span class="tournament-bracket__flag flag-icon" aria-label="Flag" :class="setCountryCode(player.countryCode)"></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">4</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
          <ul class="tournament-bracket__list" v-else>
            <li class="tournament-bracket__item" v-for="nomatch in 4" v-bind:key="nomatch">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="">Not yet started</time>
                  </caption>
                  <thead class="sr-only">
                    <tr>
                      <th>Country</th>
                      <th>Score</th>
                    </tr>
                  </thead>  
                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team" v-for='noplayer in 2' v-bind:key="noplayer">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">???</abbr>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">?</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--semifinals">
          <h3 class="tournament-bracket__round-title">Semifinals</h3>
          <ul class="tournament-bracket__list" v-if='tournament.matches.length > 12'>
            <li class="tournament-bracket__item" v-for="match in tournament.matches.slice(6, 8)" v-bind:key="match._id">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="">{{ new Date(match.createdAt).toDateString() }}</time>
                  </caption>
                  <thead class="sr-only">
                    <tr>
                      <th>Country</th>
                      <th>Score</th>
                    </tr>
                  </thead>  
                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team" v-for="player in match.players" v-bind:key="player._id" v-bind:class="{ tournamentBracketTeamWinner: player._id == '5b1e330779ea5b022c54fa03' }">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">{{ player.lastname }}</abbr>
                        <span class="tournament-bracket__flag flag-icon" aria-label="Flag" :class="setCountryCode(player.countryCode)"></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">4</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
          <ul class="tournament-bracket__list" v-else>
            <li class="tournament-bracket__item" v-for="nomatch in 2" v-bind:key="nomatch">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="">Not yet started</time>
                  </caption>
                  <thead class="sr-only">
                    <tr>
                      <th>Country</th>
                      <th>Score</th>
                    </tr>
                  </thead>  
                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team" v-for='noplayer in 2' v-bind:key="noplayer">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">???</abbr>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">?</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--bronze">
          <h3 class="tournament-bracket__round-title">Bronze medal game</h3>
          <ul class="tournament-bracket__list" v-if='tournament.matches.length > 14'>
            <li class="tournament-bracket__item" v-for="match in tournament.matches.slice(6, 7)" v-bind:key="match._id">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="">{{ new Date(match.createdAt).toDateString() }}</time>
                  </caption>
                  <thead class="sr-only">
                    <tr>
                      <th>Country</th>
                      <th>Score</th>
                    </tr>
                  </thead>  
                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team" v-for="player in match.players" v-bind:key="player._id" v-bind:class="{ tournamentBracketTeamWinner: player._id == '5b1e330779ea5b022c54fa03' }">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">{{ player.lastname }}</abbr>
                        <span class="tournament-bracket__flag flag-icon" aria-label="Flag" :class="setCountryCode(player.countryCode)"></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">4</span>
                        <span v-if="player == match.players[match.players.length - 1]" class="tournament-bracket__medal tournament-bracket__medal--bronze fa fa-trophy" aria-label="Bronze medal"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
          <ul class="tournament-bracket__list" v-else>
            <li class="tournament-bracket__item">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="">Not yet started</time>
                  </caption>
                  <thead class="sr-only">
                    <tr>
                      <th>Country</th>
                      <th>Score</th>
                    </tr>
                  </thead>  
                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team" v-for='noplayer in 2' v-bind:key="noplayer">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">???</abbr>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">?</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        <div class="tournament-bracket__round tournament-bracket__round--gold">
          <h3 class="tournament-bracket__round-title">Gold medal game</h3>
          <ul class="tournament-bracket__list" v-if='tournament.matches.length > 15'>
            <li class="tournament-bracket__item" v-for="match in tournament.matches.slice(6, 7)" v-bind:key="match._id">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="1998-02-18">{{ match.createdAt }}</time>
                  </caption>
                  <thead class="sr-only">
                    <tr>
                      <th>Country</th>
                      <th>Score</th>
                    </tr>
                  </thead>  
                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team" v-for="player in match.players" v-bind:key="player._id" v-bind:class="{ tournamentBracketTeamWinner: player._id == '5b1e330779ea5b022c54fa03' }">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">{{ player.lastname }}</abbr>
                        <span class="tournament-bracket__flag flag-icon" aria-label="Flag" :class="setCountryCode(player.countryCode)"></span>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">{{ 1 || 0 }}</span>
                        <span v-if="player == match.players[0]" class="tournament-bracket__medal tournament-bracket__medal--gold fa fa-trophy" aria-label="Gold medal"></span>
                        <span v-if="player == match.players[match.players.length - 1]" class="tournament-bracket__medal tournament-bracket__medal--silver fa fa-trophy" aria-label="Silver medal"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
          <ul class="tournament-bracket__list" v-else>
            <li class="tournament-bracket__item">
              <div class="tournament-bracket__match" tabindex="0">
                <table class="tournament-bracket__table">
                  <caption class="tournament-bracket__caption">
                    <time datetime="">Not yet started</time>
                  </caption>
                  <thead class="sr-only">
                    <tr>
                      <th>Country</th>
                      <th>Score</th>
                    </tr>
                  </thead>  
                  <tbody class="tournament-bracket__content">
                    <tr class="tournament-bracket__team" v-for='noplayer in 2' v-bind:key="noplayer">
                      <td class="tournament-bracket__country">
                        <abbr class="tournament-bracket__code" title="Canada">???</abbr>
                      </td>
                      <td class="tournament-bracket__score">
                        <span class="tournament-bracket__number">?</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </v-flex>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from './Sidebar'

export default {
  name: "TournamentDetail",
  components: {
    sidebar: Sidebar
  },
  data() {
    return {
      isActive: true,
      loading: false,
      tournament: null,
      error: null
    };
  },
  created() {
    this.fetchTournament();
  },
  methods: {
    setCountryCode(code) {
      return `flag-icon-${code}`
    },
    fetchTournament() {
      axios
        .get(`${process.env.API_URL}/tournaments/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "tokentennis"
            )}`
          }
        })
        .then(({ data }) => {
          this.loading = false;
          this.tournament = data;
        })
        .catch(e => (this.error = e));
    }
  }
};
</script>

<style scoped>
  @import 'https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700&subset=latin-ext';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.3.1/css/flag-icon.min.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css';
  .toolbarIcn { margin-left: 50px }
  .tournamentName { margin-bottom: 50px }
  .tournamentDetailDiv { padding: 50px }
  @media (min-width: 38em) {
    html {
      font-size: 14px;
    }
  }
  @media (min-width: 52em) {
    html {
      font-size: 15px;
    }
  }
  @media (min-width: 72em) {
    html {
      font-size: 16px;
    }
  }
  .container {
    width: 90%;
    min-width: 18em;
    margin: 20px auto;
  }
  h1,
  h2 {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5em;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 2em;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  .tournament-bracket {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 38em) {
    .tournament-bracket {
      flex-direction: row;
    }
  }
  .tournament-bracket__round {
    display: block;
    margin-left: -3px;
    flex: 1;
  }
  .tournament-bracket__round-title {
    color: #9e9e9e;
    font-size: 0.95rem;
    font-weight: 400;
    text-align: center;
    font-style: italic;
    margin-bottom: 0.5em;
  }
  .tournament-bracket__list {
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    justify-content: center;
    height: 100%;
    min-height: 100%;
    border-bottom: 1px dashed #e5e5e5;
    padding-bottom: 2em;
    margin-bottom: 2em;
    transition: padding 0.2s ease-in-out, margin 0.2s ease-in-out;
  }
  @media (max-width: 24em) {
    .tournament-bracket__list {
      padding-bottom: 1em;
      margin-bottom: 1em;
    }
  }
  @media (min-width: 38em) {
    .tournament-bracket__list {
      margin-bottom: 0;
      padding-bottom: 0;
      border-right: 1px dashed #e5e5e5;
      border-bottom: 0;
    }
  }
  .tournament-bracket__round:last-child .tournament-bracket__list {
    border: 0;
  }
  .tournament-bracket__item {
    display: flex;
    flex: 0 1 auto;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 2% 0;
    width: 48%;
    transition: padding 0.2s linear;
  }
  .tournament-bracket__item:nth-child(odd) {
    margin-right: 2%;
  }
  .tournament-bracket__item:nth-child(even) {
    margin-left: 2%;
  }
  .tournament-bracket__item::after {
    transition: width 0.2s linear;
  }
  @media (max-width: 24em) {
    .tournament-bracket__item {
      width: 100%;
    }
    .tournament-bracket__item:nth-child(odd),
    .tournament-bracket__item:nth-child(even) {
      margin-left: 0;
      margin-right: 0;
    }
  }
  @media (min-width: 38em) {
    .tournament-bracket__item {
      padding: 0.5em 1em;
      width: 100%;
    }
    .tournament-bracket__item:nth-child(odd),
    .tournament-bracket__item:nth-child(even) {
      margin: 0;
    }
    .tournament-bracket__item::after {
      position: absolute;
      right: 0;
      content: '';
      display: block;
      width: 1em;
      height: 45%;
      border-right: 2px solid #9e9e9e;
    }
    .tournament-bracket__item:nth-child(odd)::after {
      top: 50%;
      border-top: 2px solid #9e9e9e;
      -webkit-transform: translateY(-1px);
              transform: translateY(-1px);
    }
    .tournament-bracket--rounded .tournament-bracket__item:nth-child(odd)::after {
      border-top-right-radius: 0.6em;
    }
    .tournament-bracket__item:nth-child(even)::after {
      bottom: 50%;
      border-bottom: 2px solid #9e9e9e;
      -webkit-transform: translateY(1px);
              transform: translateY(1px);
    }
    .tournament-bracket--rounded .tournament-bracket__item:nth-child(even)::after {
      border-bottom-right-radius: 0.6em;
    }
    .tournament-bracket__round:first-child .tournament-bracket__item {
      padding-left: 0;
    }
    .tournament-bracket__round:last-child .tournament-bracket__item {
      padding-right: 0;
    }
    .tournament-bracket__round:last-child .tournament-bracket__item::after {
      display: none;
    }
    .tournament-bracket__round:nth-last-child(2) .tournament-bracket__item::after {
      border-radius: 0;
      border-right: 0;
    }
  }
  @media (min-width: 72em) {
    .tournament-bracket__item {
      padding: 0.5em 1.5em;
    }
    .tournament-bracket__item::after {
      width: 1.5em;
    }
  }
  .tournament-bracket__match {
    display: flex;
    width: 100%;
    background-color: #ffffff;
    padding: 1em;
    border: 1px solid transparent;
    border-radius: 0.1em;
    box-shadow: 0 2px 0 0 #e5e5e5;
    outline: none;
    cursor: pointer;
    transition: padding 0.2s ease-in-out, border 0.2s linear;
  }
  .tournament-bracket__match:focus {
    border-color: #2196F3;
  }
  .tournament-bracket__match::before,
  .tournament-bracket__match::after {
    transition: all 0.2s linear;
  }
  @media (max-width: 24em) {
    .tournament-bracket__match {
      padding: 0.75em 0.5em;
    }
  }
  @media (min-width: 38em) {
    .tournament-bracket__match::before,
    .tournament-bracket__match::after {
      position: absolute;
      left: 0;
      z-index: 1;
      content: '';
      display: block;
      width: 1em;
      height: 10%;
      border-left: 2px solid #9e9e9e;
    }
    .tournament-bracket__match::before {
      bottom: 50%;
      border-bottom: 2px solid #9e9e9e;
      -webkit-transform: translate(0, 1px);
              transform: translate(0, 1px);
    }
    .tournament-bracket--rounded .tournament-bracket__match::before {
      border-bottom-left-radius: 0.6em;
    }
    .tournament-bracket__match::after {
      top: 50%;
      border-top: 2px solid #9e9e9e;
      -webkit-transform: translate(0, -1px);
              transform: translate(0, -1px);
    }
    .tournament-bracket--rounded .tournament-bracket__match::after {
      border-top-left-radius: 0.6em;
    }
  }
  @media (min-width: 72em) {
    .tournament-bracket__match::before,
    .tournament-bracket__match::after {
      width: 1.5em;
    }
    .tournament-bracket__match::before {
      -webkit-transform: translate(0, 1px);
              transform: translate(0, 1px);
    }
    .tournament-bracket__match::after {
      -webkit-transform: translate(0, -1px);
              transform: translate(0, -1px);
    }
  }
  .tournament-bracket__round:last-child .tournament-bracket__match::before,
  .tournament-bracket__round:last-child .tournament-bracket__match::after {
    border-left: 0;
  }
  .tournament-bracket__round:last-child .tournament-bracket__match::before {
    border-bottom-left-radius: 0;
  }
  .tournament-bracket__round:last-child .tournament-bracket__match::after {
    display: none;
  }
  .tournament-bracket__round:first-child .tournament-bracket__match::before,
  .tournament-bracket__round:first-child .tournament-bracket__match::after {
    display: none;
  }
  .tournament-bracket__content {
    display: flex;
  }
  .tournament-bracket__content::after {
    content: ':';
    width: 1em;
    text-align: center;
    padding: 0.2em 0.1em;
  }
  @media (min-width: 38em) {
    .tournament-bracket__content::after {
      order: 1;
    }
  }
  .tournament-bracket__content .tournament-bracket__team:first-child {
    width: 50%;
    order: 0;
    text-align: right;
  }
  @media (min-width: 38em) and (max-width: 52em) {
    .tournament-bracket__content .tournament-bracket__team:first-child {
      align-items: flex-end;
    }
  }
  .tournament-bracket__content .tournament-bracket__team:first-child .tournament-bracket__country {
    order: 2;
    justify-content: flex-end;
  }
  @media (min-width: 24em) {
    .tournament-bracket__content .tournament-bracket__team:first-child .tournament-bracket__country {
      order: 0;
    }
  }
  @media (min-width: 38em) and (max-width: 52em) {
    .tournament-bracket__content .tournament-bracket__team:first-child .tournament-bracket__country {
      flex-direction: column-reverse;
      align-items: flex-end;
    }
  }
  .tournament-bracket__content .tournament-bracket__team:first-child .tournament-bracket__score {
    order: 0;
  }
  @media (min-width: 24em) {
    .tournament-bracket__content .tournament-bracket__team:first-child .tournament-bracket__score {
      order: 2;
    }
  }
  .tournament-bracket__content .tournament-bracket__team:last-child {
    width: 50%;
    order: 2;
    text-align: left;
  }
  @media (min-width: 38em) and (max-width: 52em) {
    .tournament-bracket__content .tournament-bracket__team:last-child {
      align-items: flex-start;
    }
  }
  @media (min-width: 38em) {
    .tournament-bracket__content .tournament-bracket__team:last-child .tournament-bracket__country {
      justify-content: flex-start;
    }
  }
  @media (min-width: 38em) and (max-width: 52em) {
    .tournament-bracket__content .tournament-bracket__team:last-child .tournament-bracket__country {
      align-items: flex-start;
    }
  }
  .tournament-bracket__content .tournament-bracket__team:last-child .tournament-bracket__code {
    order: 1;
  }
  .tournament-bracket__table {
    width: 100%;
  }
  .tournament-bracket__caption {
    font-size: 0.8rem;
    color: #BDBDBD;
    font-weight: 300;
    padding-bottom: 0.75em;
  }
  .tournament-bracket__team {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media (min-width: 24em) {
    .tournament-bracket__team {
      flex-direction: column-reverse;
    }
  }
  @media (min-width: 38em) {
    .tournament-bracket__team {
      flex-direction: column-reverse;
    }
  }
  .tournament-bracket__country {
    font-size: 0.95rem;
    display: flex;
    margin-top: 0.5em;
    align-items: center;
  }
  @media (max-width: 24em) {
    .tournament-bracket__country {
      margin-top: 0;
    }
  }
  @media (min-width: 38em) and (max-width: 52em) {
    .tournament-bracket__country {
      display: flex;
      flex-direction: column;
    }
    .tournament-bracket__country .tournament-bracket__code {
      margin-top: 0.2em;
    }
  }
  .tournament-bracket__code {
    padding: 0 0.5em;
    color: #212121;
    font-weight: 600;
    text-transform: uppercase;
    border: 0;
    text-decoration: none;
    cursor: help;
    transition: padding 0.2s ease-in-out;
  }
  @media (max-width: 24em) {
    .tournament-bracket__code {
      padding: 0 0.25em;
    }
  }
  @media (min-width: 38em) and (max-width: 52em) {
    .tournament-bracket__code {
      padding: 0;
    }
  }
  .tournament-bracket__score {
    display: flex;
    align-items: center;
  }
  .tournament-bracket__team:first-child .tournament-bracket__score {
    flex-direction: row-reverse;
    padding-left: 0.75em;
  }
  .tournament-bracket__team:last-child .tournament-bracket__score {
    padding-right: 0.75em;
  }
  .tournament-bracket__number {
    display: inline-block;
    padding: 0.2em 0.4em 0.2em;
    border-bottom: 0.075em solid transparent;
    font-size: 0.95rem;
    background-color: #F5F5F5;
    border-color: #dddddd;
  }
  .tournament-bracket__team--winner .tournament-bracket__number {
    background-color: #FFF176;
    border-color: #fad674;
  }
  .tournamentBracketTeamWinner .tournament-bracket__number {
    background-color: #FFF176;
    border-color: #fad674;
  }
  .tournament-bracket__medal {
    padding: 0 0.5em;
  }
  .tournament-bracket__medal--gold {
    color: #FFD700;
  }
  .tournament-bracket__medal--silver {
    color: #C0C0C0;
  }
  .tournament-bracket__medal--bronze {
    color: #CD7F32;
  }

</style>
