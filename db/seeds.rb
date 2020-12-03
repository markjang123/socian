# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo = User.create(username: "demoUser", password_digest: "$2a$12$JT98UKjUzhLIwE8Wbo3/EO.NRF43w9CT1b62c8ZSw7q6TR9uMIB8C", email: "demo@user.com", user_type: "fan")
demo_profile = open("https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png")
demo.profile_image.attach(io: demo_profile, filename: "demo_profile")
demo_banner = open("https://f4.bcbits.com/img/0018750819_100.png")
demo.banner_image.attach(io: demo_banner, filename: "demo_banner")
kkb = User.create(username: "Kero Kero Bonito", password_digest: "$2a$12$JT98UKjUzhLIwE8Wbo3/EO.NRF43w9CT1b62c8ZSw7q6TR9uMIB8C", email: "kero@bonito.com", user_type: "artist", location: "London, UK", description: "KKB = Sarah + Gus + Jamie", soundcloud_link: "http://www.soundcloud.com/kerokerobonito", facebook_link: "http://www.facebook.com/kerokerobonito", youtube_link: "http://www.youtube.com/user/KeroKeroBonito", tumblr_link: "http://www.kerokerobonito.tumblr.com/", twitter_link: "http://www.twitter.com/KeroKeroBonito")
kkb_profile = open("https://socian-seed.s3-us-west-1.amazonaws.com/kero_kero_bonito_profile.jpg")
kkb.profile_image.attach(io: kkb_profile, filename: "kero_kero_bonito_profile")
kkb_banner = open("https://socian-seed.s3-us-west-1.amazonaws.com/kero_kero_bonito_banner.png")
kkb.banner_image.attach(io: kkb_banner, filename: "kero_kero_bonito_banner")
bh = User.create(username: "Beach House", password_digest: "$2a$12$JT98UKjUzhLIwE8Wbo3/EO.NRF43w9CT1b62c8ZSw7q6TR9uMIB8C", email: "beach@house.com", user_type: "artist", location: "Baltimore, Maryland", description: "beachhousebaltimore.com", facebook_link: "https://www.facebook.com/beachhouse")
bh_profile = open("https://socian-seed.s3-us-west-1.amazonaws.com/beach_house_profile.jpg")
bh.profile_image.attach(io: bh_profile, filename: "beach_house_profile") 
bh_banner = open("https://socian-seed.s3-us-west-1.amazonaws.com/beach_house_banner.png")
bh.banner_image.attach(io: bh_banner, filename: "beach_house_banner")
ff = User.create(username: "Fleet Foxes", password_digest: "$2a$12$JT98UKjUzhLIwE8Wbo3/EO.NRF43w9CT1b62c8ZSw7q6TR9uMIB8C", email: "fleet@foxes.com", user_type: "artist", location: "Seattle, Washington", description: "", facebook_link: "https://www.facebook.com/FleetFoxes/")
ff_profile = open("https://socian-seed.s3-us-west-1.amazonaws.com/fleet_foxes_profile.jpg")
ff.profile_image.attach(io: ff_profile, filename: "fleet_foxes_profile") 
ff_banner = open("https://socian-seed.s3-us-west-1.amazonaws.com/fleet_foxes_banner.png")
ff.banner_image.attach(io: ff_banner, filename: "fleet_foxes_banner")


shore = Album.create(artist_id: ff.id, title: "Shore", release_date: Date.new(2020, 9, 25))
shore_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/shore.jpg")
shore.cover.attach(io: shore_cover, filename: "shore")
Track.create(album_id: shore.id, title: "Wading In Waist-High Water", length: "2:15", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/wading_in_waist_high_water.mp3")
Track.create(album_id: shore.id, title: "Sunblind", length: "4:14", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/sunblind.mp3")
Track.create(album_id: shore.id, title: "Can I Believe You", length: "4:04", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/can_i_believe_you.mp3")
Track.create(album_id: shore.id, title: "Jara", length: "2:15", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/jara.mp3")
Track.create(album_id: shore.id, title: "Featherweight", length: "3:50", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/featherweight.mp3")
Track.create(album_id: shore.id, title: "A Long Way Past The Past", length: "3:59", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/a_long_way_past_the_past.mp3")
Track.create(album_id: shore.id, title: "For A Week Or Two", length: "2:11", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/for_a_week_or_two.mp3")
Track.create(album_id: shore.id, title: "Maestranza", length: "3:03", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/maestranza.mp3")
Track.create(album_id: shore.id, title: "Young Man's Game", length: "3:11", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/young_mans_game.mp3")
Track.create(album_id: shore.id, title: "I'm Not My Season", length: "3:11", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/im_not_my_season.mp3")
Track.create(album_id: shore.id, title: "Quiet Air/ Gioia", length: "4:27", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/quiet_air_gioia.mp3")
Track.create(album_id: shore.id, title: "Going-To-The-Sun Road", length: "3:58", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/going_to_the_sun_road.mp3")
Track.create(album_id: shore.id, title: "Thymia", length: "2:22", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/thymia.mp3")
Track.create(album_id: shore.id, title: "Cradling Mother, Cradling Woman", length: "5:10", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/cradling_mother_cradling_woman.mp3")
Track.create(album_id: shore.id, title: "Shore", length: "4:19", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/shore/shore.mp3")

crack_up = Album.create(artist_id: ff.id, title: "Crack-Up", release_date: Date.new(2017, 6, 16))
crack_up_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/crack_up.jpg")
crack_up.cover.attach(io: crack_up_cover, filename: "crack_up")
Track.create(album_id: crack_up.id, title: "I Am All That I Need / Arroyo Seco / Thumprint Scar", length: "6:25", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/i_am_all_that_i_needed_arroyo_seco_thumbprint_scar.mp3")
Track.create(album_id: crack_up.id, title: "Cassius", length: "4:49", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/cassius.mp3")
Track.create(album_id: crack_up.id, title: "- Naiads, Cassadies", length: "3:10", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/naiads_cassadies.mp3")
Track.create(album_id: crack_up.id, title: "Kept Woman", length: "3:54", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/kept_woman.mp3")
Track.create(album_id: crack_up.id, title: "Third of May / Odaigahara", length: "8:45", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/third_or_may_odaigahara.mp3")
Track.create(album_id: crack_up.id, title: "If You Need to, Keep Time On Me", length: "3:30", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/if_you_need_to_keep_time_on_me.mp3")
Track.create(album_id: crack_up.id, title: "Mearcstapa", length: "4:09", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/mearcstapa.mp3")
Track.create(album_id: crack_up.id, title: "On Another Ocean (January / June)", length: "4:23", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/on_another_ocean_janurary_june.mp3")
Track.create(album_id: crack_up.id, title: "Fool's Errand", length: "4:48", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/fools_errand.mp3")
Track.create(album_id: crack_up.id, title: "I Should See Memphis", length: "4:44", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/i_should_see_memphis.mp3")
Track.create(album_id: crack_up.id, title: "Crack-Up", length: "6:24", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/crack_up/crack_up.mp3")


helplessness_blues = Album.create(artist_id: ff.id, title: "Helplessness Blues", release_date: Date.new(2011, 4, 29))
helplessness_blues_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues.jpg")
helplessness_blues.cover.attach(io: helplessness_blues_cover, filename: "helplessness_blues")
Track.create(album_id: helplessness_blues.id, title: "Montezuma", length: "3:37", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/montezuma.mp3")
Track.create(album_id: helplessness_blues.id, title: "Bedouin Dress", length: "4:29", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/bedouin_dress.mp3" )
Track.create(album_id: helplessness_blues.id, title: "Sim Sala Bim", length: "3:14", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/sim_sala_bim.mp3" )
Track.create(album_id: helplessness_blues.id, title: "Battery Kinzie", length: "2:49", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/battery_kinzie.mp3" )
Track.create(album_id: helplessness_blues.id, title: "The Plains / Bitter Dancer", length: "5:53", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/the_plains_bitter_dancer.mp3")
Track.create(album_id: helplessness_blues.id, title: "Helplessness Blues", length: "5:03", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/helplessness_blues.mp3")
Track.create(album_id: helplessness_blues.id, title: "The Cascades", length: "2:07", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/the_cascades.mp3" )
Track.create(album_id: helplessness_blues.id, title: "Lorelai", length: "4:24", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/lorelai.mp3" )
Track.create(album_id: helplessness_blues.id, title: "Someone You'd Admire", length: "2:29", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/someone_youd_admire.mp3" )
Track.create(album_id: helplessness_blues.id, title: "The Shrine / An Argument", length: "8:07", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/the_shrine_an_argument.mp3")
Track.create(album_id: helplessness_blues.id, title: "Blue Spotted Tail", length: "3:05", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/blue_spotted_tail.mp3")
Track.create(album_id: helplessness_blues.id, title: "Grown Ocean", length: "4:36", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/helplessness_blues/grown_ocean.mp3")

bloom = Album.create(artist_id: bh.id, title: "Bloom", release_date: Date.new(2012, 5, 15))
bloom_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/bloom.jpg")
bloom.cover.attach(io: bloom_cover, filename: "bloom.jpg")
Track.create(album_id: bloom.id, title: "Myth", length: "4:19", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/myth.mp3")
Track.create(album_id: bloom.id, title: "Wild", length: "4:58", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/wild.mp3")
Track.create(album_id: bloom.id, title: "Lazuli", length: "5:02", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/lazuli.mp3")
Track.create(album_id: bloom.id, title: "Other People", length: "4:25", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/other_people.mp3")
Track.create(album_id: bloom.id, title: "The Hours", length: "4:12", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/the_hours.mp3")
Track.create(album_id: bloom.id, title: "Troublemaker", length: "4:56", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/troublemaker.mp3")
Track.create(album_id: bloom.id, title: "New Year", length: "5:26", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/new_year.mp3")
Track.create(album_id: bloom.id, title: "Wishes", length: "4:47", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/wishes.mp3")
Track.create(album_id: bloom.id, title: "On The Sea", length: "5:32", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/on_the_sea.mp3")
Track.create(album_id: bloom.id, title: "Irene", length: "16:57", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bloom/irene.mp3")

dc = Album.create(artist_id: bh.id, title: "Depression Cherry", release_date: Date.new(2015, 8, 28))
dc_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry.jpg")
dc.cover.attach(io: dc_cover, filename: "depression_cherry.jpg")
Track.create(album_id: dc.id, title: "Levitation", length: "5:55", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry/levitation.mp3")
Track.create(album_id: dc.id, title: "Sparks", length: "5:21", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry/sparks.mp3")
Track.create(album_id: dc.id, title: "Space Song", length: "5:20", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry/space_song.mp3")
Track.create(album_id: dc.id, title: "Beyond Love", length: "4:25", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry/beyond_love.mp3")
Track.create(album_id: dc.id, title: "10:37", length: "3:49", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry/10_37.mp3")
Track.create(album_id: dc.id, title: "PPP", length: "6:09", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry/ppp.mp3")
Track.create(album_id: dc.id, title: "Wildflower", length: "3:39", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry/wildflower.mp3")
Track.create(album_id: dc.id, title: "Bluebird", length: "3:55", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry/bluebird.mp3")
Track.create(album_id: dc.id, title: "Days of Candy", length: "6:16", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/depression_cherry/days_of_candy.mp3")

bonito_generation = Album.create(artist_id: kkb.id, title: "Bonito Generation", release_date: Date.new(2016, 10, 21))
bonito_generation_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation.jpg")
bonito_generation.cover.attach(io: bonito_generation_cover, filename: "bonito_generation.jpg")
Track.create(album_id: bonito_generation.id, title: "Waking Up", length: "2:57", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/waking_up.mp3")
Track.create(album_id: bonito_generation.id, title: "Heard A Song", length: "3:19", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/heard_a_song.mp3")
Track.create(album_id: bonito_generation.id, title: "Graduation", length: "3:20", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/graduation.mp3")
Track.create(album_id: bonito_generation.id, title: "Fish Bowl", length: "1:46", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/fish_bowl.mp3")
Track.create(album_id: bonito_generation.id, title: "Big City", length: "2:52", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/big_city.mp3")
Track.create(album_id: bonito_generation.id, title: "Break", length: "3:17", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/break.mp3")
Track.create(album_id: bonito_generation.id, title: "Lipslap", length: "3:40", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/lipslap.mp3")
Track.create(album_id: bonito_generation.id, title: "Try Me", length: "3:30", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/try_me.mp3")
Track.create(album_id: bonito_generation.id, title: "Paintbrush", length: "0:57", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/paintbrush.mp3")
Track.create(album_id: bonito_generation.id, title: "Trampoline", length: "4:04", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/trampoline.mp3")
Track.create(album_id: bonito_generation.id, title: "Picture This", length: "3:24", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/picture_this.mp3")
Track.create(album_id: bonito_generation.id, title: "Hey Parents", length: "3:23", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/bonito_generation/hey_parents.mp3")

flamingo = Album.create(artist_id: kkb.id, title: "Flamingo", release_date: Date.new(2014, 9, 23))
flamingo_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/flamingo.jpg")
flamingo.cover.attach(io: flamingo_cover, filename: "flamingo.jpg")
Track.create(album_id: flamingo.id, title: "Flamingo", length: "3:17", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/flamingo/flamingo.mp3")

time_n_place = Album.create(artist_id: kkb.id, title: "Time \'n\' Place", release_date: Date.new(2018, 10, 1))
time_n_place_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/time_'n'_place.jpg")
time_n_place.cover.attach(io: time_n_place_cover, filename: "time_n_place.jpg")
Track.create(album_id: time_n_place.id, title: "Outside", length: "1:51", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/outside.mp3")
Track.create(album_id: time_n_place.id, title: "Time Today", length: "2:11", audio_source:"https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/time_today.mp3")
Track.create(album_id: time_n_place.id, title: "Only Acting", length: "3:49", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/only_acting.mp3")
Track.create(album_id: time_n_place.id, title: "Flyaway", length: "1:58", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/flyway.mp3")
Track.create(album_id: time_n_place.id, title: "Dump", length: "3:01", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/dump.mp3")
Track.create(album_id: time_n_place.id, title: "Make Believe", length: "3:27", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/make_believe.mp3")
Track.create(album_id: time_n_place.id, title: "Dear Future Self", length: "2:46", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/dear_future_self.mp3")
Track.create(album_id: time_n_place.id, title: "Visiting Hours", length: "2:25", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/visiting_hours.mp3")
Track.create(album_id: time_n_place.id, title: "If I'd Known", length: "2:43", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/if_id_known.mp3")
Track.create(album_id: time_n_place.id, title: "Sometimes", length: "2:01", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/sometimes.mp3")
Track.create(album_id: time_n_place.id, title: "Swimming", length: "3:19", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/swimming.mp3")
Track.create(album_id: time_n_place.id, title: "Rest Stop", length: "3:22", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/rest_stop.mp3")

totep = Album.create(artist_id: kkb.id, title: "TOTEP", release_date: Date.new(2018, 2, 20))
totep_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/TOTEP.jpg")
totep.cover.attach(io: totep_cover, filename: "totep.jpg")
Track.create(album_id: totep.id, title: "The One True Path", length: "2:55", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/totep/the_one_true_path.mp3")
Track.create(album_id: totep.id, title: "Only Acting", length: "3:49", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/time_n_place/only_acting.mp3")
Track.create(album_id: totep.id, title: "You Know How It Is", length: "2:14", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/totep/you_know_how_it_is.mp3")
Track.create(album_id: totep.id, title: "Cinema", length: "2:55", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/totep/cinema.mp3")


intro_bonito = Album.create(artist_id: kkb.id, title: "Intro Bonito", release_date: Date.new(2013, 9, 30))
intro_bonito_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito.jpg")
intro_bonito.cover.attach(io: intro_bonito_cover, filename: "intro_bonito.jpg")
Track.create(album_id: intro_bonito.id, title: "Bonito Intro", length: "0:50", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/bonito_intro.mp3")
Track.create(album_id: intro_bonito.id, title: "Intro Bonito", length: "2:45", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/intro_bonito.mp3")
Track.create(album_id: intro_bonito.id, title: "Sick Beat", length: "2:59", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/sick_beat.mp3")
Track.create(album_id: intro_bonito.id, title: "My Party", length: "2:47", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/my_party.mp3")
Track.create(album_id: intro_bonito.id, title: "Cat vs. Dog", length: "0:58", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/cat_vs_dog.mp3")
Track.create(album_id: intro_bonito.id, title: "Kero Kero Bonito", length: "2:36", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/kero_kero_bonito.mp3")
Track.create(album_id: intro_bonito.id, title: "Babies (Are So Strange)", length: "2:36", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/babies_are_so_strange.mp3")
Track.create(album_id: intro_bonito.id, title: "Bonito Jingle", length: "0:18", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/bonito_jingle.mp3")
Track.create(album_id: intro_bonito.id, title: "Homework", length: "2:17", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/homework.mp3")
Track.create(album_id: intro_bonito.id, title: "Pocket Crocodile", length: "1:55", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/pocket_crocodile.mp3")
Track.create(album_id: intro_bonito.id, title: "Cat vs. Dog (Japanese)", length: "0:58", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/cat_vs_dog_japanese.mp3")
Track.create(album_id: intro_bonito.id, title: "Park Song", length: "2:45", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/park_song.mp3")
Track.create(album_id: intro_bonito.id, title: "Let's Go to the Forest", length: "2:03", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/lets_go_to_the_forest.mp3")
Track.create(album_id: intro_bonito.id, title: "Small Town", length: "2:46", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/small_town.mp3")
Track.create(album_id: intro_bonito.id, title: "I'd Rather Sleep", length: "1:55", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/intro_bonito/id_rather_sleep.mp3")


civilisation_I = Album.create(artist_id: kkb.id, title: "Civilisation I", release_date: Date.new(2019, 9, 30))
civilisation_I_cover = open("https://socian-seed.s3-us-west-1.amazonaws.com/Civilisation_I.jpg")
civilisation_I.cover.attach(io: civilisation_I_cover, filename: "civilisation_I.jpg")
Track.create(album_id: civilisation_I.id, title: "Battle Lines", length: "4:18", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/civilisation_i/battle_lines.mp3")
Track.create(album_id: civilisation_I.id, title: "When The Fires Come", length: "3:40", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/civilisation_i/when_the_fires_come.mp3")
Track.create(album_id: civilisation_I.id, title: "The River", length: "4:39", audio_source: "https://socian-seed.s3-us-west-1.amazonaws.com/civilisation_i/the_river.mp3")

flamingo_vinyl = Product.create(seller_id: kkb.id, name: "FLAMINGO (LIMITED EDITION 7” VINYL)", price: 15, category: "Record/Vinyl" )
flamingo_vinyl_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/kkb_products/flamingo_vinyl.jpg")
flamingo_vinyl.product_image.attach(io: flamingo_vinyl_image, filename: "flamingo_vinyl_image")
pocket_crocodile_shirt = Product.create(seller_id: kkb.id, name: "POCKET CROCODILE", price: 25, category: "Apparel" )
pocket_crocodile_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/kkb_products/kkb_crocodile_polo.jpg")
pocket_crocodile_shirt.product_image.attach(io: pocket_crocodile_image, filename: "pocket_crocodile_image")
symbols_beanie = Product.create(seller_id: kkb.id, name: "SYMBOLS BEANIE", price: 15, category: "Apparel" )
symbols_beanie_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/kkb_products/kkb_beanie.jpg")
symbols_beanie.product_image.attach(io: symbols_beanie_image, filename: "symbols_beanie_image")
kkb_pink_shirt = Product.create(seller_id: kkb.id, name: "KKB LOGO (ENGLISH) (PINK)", price: 25, category: "Apparel" )
kkb_pink_shirt_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/kkb_products/kkb_pink_shirt.jpg")
kkb_pink_shirt.product_image.attach(io: kkb_pink_shirt_image, filename: "kkb_pink_shirt_image")
kkb_blue_shirt = Product.create(seller_id: kkb.id, name: "KKB LOGO (JAPANESE) (BLUE)", price: 25, category: "Apparel" )
kkb_blue_shirt_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/kkb_products/kkb_blue_shirt.jpg")
kkb_blue_shirt.product_image.attach(io: kkb_blue_shirt_image, filename: "kkb_blue_shirt_image")

bg_post = Post.create(author_id: kkb.id, post_type: "New release", album_id: bonito_generation.id, date: "September 5, 2020")
tnp_post = Post.create(author_id: kkb.id, post_type: "New release", album_id: time_n_place.id, date: "August 12, 2020")
totep_post = Post.create(author_id: kkb.id, post_type: "New release", album_id: totep.id, date: "July 2, 2020")
civi_post = Post.create(author_id: kkb.id, post_type: "New release", album_id: civilisation_I.id, date: "May 8, 2020")

bloom_shirt = Product.create(seller_id: bh.id, name: "Bloom Black T-Shirt", price: 24, category: "Apparel" )
bloom_shirt_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/beach_house_products/bloom_black_tee.jpg")
bloom_shirt.product_image.attach(io: bloom_shirt_image, filename: "bloom_shirt_image")

dc_shirt = Product.create(seller_id: bh.id, name: "Depression Cherry White T-Shirt", price: 24, category: "Apparel" )
dc_shirt_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/beach_house_products/dc_white_shirt.jpg")
dc_shirt.product_image.attach(io: dc_shirt_image, filename: "dc_shirt_image")

dc_vinyl = Product.create(seller_id: bh.id, name: "Depression Cherry - Black Vinyl LP", price: 18, category: "Record/Vinyl" )
dc_vinyl_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/beach_house_products/dc_vinyl.jpg")
dc_vinyl.product_image.attach(io: dc_vinyl_image, filename: "dc_vinyl_image")

dc_cassette = Product.create(seller_id: bh.id, name: "Depression Cherry - Cassette Tape - Red", price: 10, category: "Cassette" )
dc_cassette_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/beach_house_products/dc_cassette.jpg")
dc_cassette.product_image.attach(io: dc_cassette_image, filename: "dc_cassette_image")

dc_cd = Product.create(seller_id: bh.id, name: "Depression Cherry - Compact Disc", price: 12, category: "Compact Disc (CD)" )
dc_cd_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/beach_house_products/dc_cd.jpg")
dc_cd.product_image.attach(io: dc_cd_image, filename: "dc_cd_image")

bloom_cd = Product.create(seller_id: bh.id, name: "Bloom - Compact Disc", price: 12, category: "Compact Disc (CD)" )
bloom_cd_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/beach_house_products/bloom_cd.jpg")
bloom_cd.product_image.attach(io: bloom_cd_image, filename: "bloom_cd_image")

bloom_cassette = Product.create(seller_id: bh.id, name: "Bloom - Cassette Tape - Black", price: 10, category: "Cassette" )
bloom_cassette_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/beach_house_products/bloom_cassette.jpg")
bloom_cassette.product_image.attach(io: bloom_cassette_image, filename: "bloom_cassette_image")


bloom_post = Post.create(author_id: bh.id, post_type: "New release", album_id: bloom.id, date: "September 8, 2018")
dc_post = Post.create(author_id: bh.id, post_type: "New release", album_id: dc.id, date: "January 8, 2019")

hb_cassette = Product.create(seller_id: ff.id, name: "Helplessness Blues - Cassette Tape - Red", price: 10, category: "Cassette" )
hb_cassette_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/fleet_foxes_products/helplessness_cassette.jpg")
hb_cassette.product_image.attach(io: hb_cassette_image, filename: "hb_cassette_image")

hb_shirt = Product.create(seller_id: ff.id, name: "Helplessness Blues Forest Green T-Shirt", price: 24, category: "Apparel" )
hb_shirt_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/fleet_foxes_products/ff_helplessness_shirt.jpg")
hb_shirt.product_image.attach(io: hb_shirt_image, filename: "hb_shirt_image")

ff_green_shirt = Product.create(seller_id: ff.id, name: "FF Green T-Shirt", price: 24, category: "Apparel" )
ff_green_shirt_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/fleet_foxes_products/ff_green_shirt.jpg")
ff_green_shirt.product_image.attach(io: ff_green_shirt_image, filename: "ff_green_shirt_image")

ff_blue_shirt = Product.create(seller_id: ff.id, name: "FF Blue T-Shirt", price: 24, category: "Apparel" )
ff_blue_shirt_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/fleet_foxes_products/ff_blue_shirt.jpg")
ff_blue_shirt.product_image.attach(io: ff_blue_shirt_image, filename: "ff_blue_shirt_image")

crack_up_cd = Product.create(seller_id: ff.id, name: "Crack-Up – Gatefold Cardboard Sleeve CD Release", price: 12, category: "Compact Disc (CD)" )
crack_up_cd_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/fleet_foxes_products/crack_up_cd.jpg")
crack_up_cd.product_image.attach(io: crack_up_cd_image, filename: "crack_up_cd_image")

crack_up_vinyl = Product.create(seller_id: ff.id, name: "Crack-Up – 2-LP set", price: 20, category: "Record/Vinyl" )
crack_up_vinyl_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/fleet_foxes_products/crack_up_vinyl.jpg")
crack_up_vinyl.product_image.attach(io: crack_up_vinyl_image, filename: "crack_up_vinyl_image")

ff_first_collection_vinyl = Product.create(seller_id: ff.id, name: "First Collection 2006-2009 – 4x Deluxe Vinyl LP", price: 65, category: "Record/Vinyl" )
ff_first_collection_vinyl_image = open("https://socian-seed.s3-us-west-1.amazonaws.com/fleet_foxes_products/ff_first_collection_vinyl.jpg")
ff_first_collection_vinyl.product_image.attach(io: ff_first_collection_vinyl_image, filename: "ff_first_collection_vinyl_image")


shore_post = Post.create(author_id: ff.id, post_type: "New release", album_id: shore.id, date: "September 25, 2020")
hb_post = Post.create(author_id: ff.id, post_type: "New release", album_id: helplessness_blues.id, date: "October 10, 2019")
crack_up_post = Post.create(author_id: ff.id, post_type: "New release", album_id: crack_up.id, date: "March 12, 2019")





