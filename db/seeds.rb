# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

UserPunchcard.destroy_all
Reward.destroy_all
Punchcard.destroy_all
Restaurant.destroy_all
User.destroy_all

account_types = ['business', 'customer']

     user = User.create( name:Faker::Name.name, email:Faker::Internet.email, password:'123456', account_type:'business')

     user2 = User.create( name:Faker::Name.name, email:Faker::Internet.email, password:'123456', account_type:'business')
     user3 = User.create( name:Faker::Name.name, email:Faker::Internet.email, password:'123456', account_type:'customer')
     user4 = User.create( name:Faker::Name.name, email:Faker::Internet.email, password:'123456', account_type:'customer')
     user5 = User.create( name:Faker::Name.name, email:Faker::Internet.email, password:'123456', account_type:'business')

users = [user,user2,user3,user4,user5]

      rest = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:users[rand(4)].id)
      rest2 = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:users[rand(4)].id)
      rest3 = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:users[rand(4)].id)
      rest4 = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:users[rand(4)].id)

rests = [rest, rest2, rest3, rest4]

      punch = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )
      punch2 = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )
      punch3 = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )
      punch4 = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )
      punch5 = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )
      punch6 = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )
      punch7 = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )
      punch8 = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )
      punch9 = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )
      punch1 = rest.punchcards.create(total_points:rand(10), restaurant_id:rests[rand(4)].id, description:Faker::Restaurant.description )

punches = [punch, punch2, punch3, punch4, punch5, punch6, punch7, punch8, punch9, punch1]

    15.times do
      reward = punch.rewards.create(name:Faker::Name.name, description:Faker::Restaurant.description, punchcard_id:punches[rand(10)].id, cost:rand(10))
      end
  
  15.times do
      UserPunchcard.create(current_points:rand(10), user_id:users[rand(4)].id, punchcard_id:punches[rand(10)].id, expiration_date:Faker::Date.between(from: '2021-09-23', to: '2021-12-25'))
    end


puts User.all.length
puts Restaurant.all.length
puts Reward.all.length
puts UserPunchcard.all.length
