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
user7 = User.create( name:'business4', email:'business4@email.com', password:'123456', account_type:'business')
user3 = User.create( name:'customer1', email:'customer1@email.com', password:'123456', account_type:'customer')
user4 = User.create( name:'customer2', email:'customer2@email.com', password:'123456', account_type:'customer')
user6 = User.create( name:'customer3', email:'customer3@email.com', password:'123456', account_type:'customer')
user6 = User.create( name:'customer3', email:'customer3@email.com', password:'123456', account_type:'customer')

bizusers = [user,user2,user5, user7]
custusers = [user3,user4, user6]

 rest = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:bizusers[0].id, image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SHhtuIyVI39uCzddyZFEigHaHa%26pid%3DApi&f=1')
 rest2 = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:bizusers[1].id, image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SHhtuIyVI39uCzddyZFEigHaHa%26pid%3DApi&f=1')
 rest3 = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:bizusers[2].id, image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SHhtuIyVI39uCzddyZFEigHaHa%26pid%3DApi&f=1')
 rest4 = Restaurant.create(city:Faker::Address.city, name:Faker::Restaurant.name, zip:Faker::Address.zip, phone_number:Faker::PhoneNumber.cell_phone, user_id:bizusers[3].id, image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SHhtuIyVI39uCzddyZFEigHaHa%26pid%3DApi&f=1')
      
 rests = [rest, rest2, rest3, rest4]


      punch = Punchcard.create(total_points:rand(10), logo:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rJ8RdzT3GcoESzEs9HMhmAHaEK%26pid%3DApi&f=1', restaurant_id:rests[0].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch2 = Punchcard.create(total_points:rand(10), logo:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.R_596Yojo_1gADHcwcuugAHaE7%26pid%3DApi&f=1', restaurant_id:rests[1].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch3 = Punchcard.create(total_points:rand(10), logo:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GNDrmtZt7ZHSIS-xH59olwHaEo%26pid%3DApi&f=1', restaurant_id:rests[2].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )
      punch4 = Punchcard.create(total_points:rand(10), logo:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.o6NKSLyqr4kwrRw8UM0rSAHaED%26pid%3DApi&f=1', restaurant_id:rests[3].id, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
      erat a ante.' )

punches = [punch, punch2, punch3, punch4]

    15.times do
      reward = Reward.create(name:'reward', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque.', punchcard_id:punches[rand(3)].id, cost:rand(100))
      end
  
  # 15.times do
      UserPunchcard.create(current_points:rand(100), user_id:custusers[0].id, punchcard_id:punches[0].id, expiration_date:Faker::Date.between(from: '2021-09-23', to: '2021-12-25'))
      UserPunchcard.create(current_points:rand(100), user_id:custusers[1].id, punchcard_id:punches[1].id, expiration_date:Faker::Date.between(from: '2021-09-23', to: '2021-12-25'))
      UserPunchcard.create(current_points:rand(100), user_id:custusers[2].id, punchcard_id:punches[2].id, expiration_date:Faker::Date.between(from: '2021-09-23', to: '2021-12-25'))
      UserPunchcard.create(current_points:rand(100), user_id:custusers[0].id, punchcard_id:punches[2].id, expiration_date:Faker::Date.between(from: '2021-09-23', to: '2021-12-25'))
      UserPunchcard.create(current_points:rand(100), user_id:custusers[1].id, punchcard_id:punches[1].id, expiration_date:Faker::Date.between(from: '2021-09-23', to: '2021-12-25'))
      UserPunchcard.create(current_points:rand(100), user_id:custusers[2].id, punchcard_id:punches[0].id, expiration_date:Faker::Date.between(from: '2021-09-23', to: '2021-12-25'))
    # end


puts User.all.length
puts Restaurant.all.length
puts Reward.all.length
puts UserPunchcard.all.length