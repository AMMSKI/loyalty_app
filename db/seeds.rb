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

     user = User.create( name:'business1', email:'business1@email.com', password:'123456', account_type:'business')
     user5 = User.create( name:'business2', email:'business2@email.com', password:'123456', account_type:'business')
     user2 = User.create( name:'business3', email:'business3@email.com', password:'123456', account_type:'business')
     user3 = User.create( name:'customer1', email:'customer1@email.com', password:'123456', account_type:'customer')
     user4 = User.create( name:'customer2', email:'customer2@email.com', password:'123456', account_type:'customer')
     user6 = User.create( name:'customer3', email:'customer3@email.com', password:'123456', account_type:'customer')

bizusers = [user,user2,user5]
custusers = [user3,user4, user6]

      rest = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:bizusers[rand(3)].id)
      rest2 = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:bizusers[rand(3)].id)
      rest3 = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:bizusers[rand(3)].id)
      rest4 = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:bizusers[rand(3)].id)
rests = [rest, rest2,rest3,rest4]

      punch = Punchcard.create(total_points:rand(10), restaurant_id:rests[0].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch2 = Punchcard.create(total_points:rand(10), restaurant_id:rests[1].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch3 = Punchcard.create(total_points:rand(10), restaurant_id:rests[2].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch4 = Punchcard.create(total_points:rand(10), restaurant_id:rests[3].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch5 = Punchcard.create(total_points:rand(10), restaurant_id:rests[0].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch6 = Punchcard.create(total_points:rand(10), restaurant_id:rests[1].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch7 = Punchcard.create(total_points:rand(10), restaurant_id:rests[2].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch8 = Punchcard.create(total_points:rand(10), restaurant_id:rests[3].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch9 = Punchcard.create(total_points:rand(10), restaurant_id:rests[0].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch1 = Punchcard.create(total_points:rand(10), restaurant_id:rests[3].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )

punches = [punch, punch2, punch3, punch4, punch5, punch6, punch7, punch8, punch9, punch1]

    15.times do
      reward = Reward.create(name:'reward', description:Faker::Restaurant.description, punchcard_id:punches[rand(10)].id, cost:rand(10))
      end
  
  15.times do
      UserPunchcard.create(current_points:rand(100), user_id:custusers[rand(3)].id, punchcard_id:punches[rand(10)].id, expiration_date:Faker::Date.between(from: '2021-09-23', to: '2021-12-25'))
    end


puts User.all.length
puts Restaurant.all.length
puts Reward.all.length
puts UserPunchcard.all.length
