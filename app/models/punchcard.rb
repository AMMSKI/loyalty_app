class Punchcard < ApplicationRecord
  belongs_to :restaurant
  has_many :users, through: :user_punchcards
  has_many :rewards, dependent: :destroy
  has_many :user_punchcards, dependent: :destroy

  def self.punchcard_rest

# SELECT p.id AS punch_id, p.description, p.total_points, r.name AS restaurant_name, r.id AS restaurant_id, r.city
# FROM punchcards AS p
# INNER JOIN restaurants AS R ON p.restaurant_id = r.id

    select('p.id AS punch_id, p.description, p.total_points, p.logo, r.name AS restaurant_name, r.id AS restaurant_id, r.city, r.image AS restaurant_image')
    .from('punchcards AS p')
    .joins('INNER JOIN restaurants AS R ON p.restaurant_id = r.id')

  end

  # SELECT p.restaurant_id as rest_id, up.created_at AS created_at
  # FROM punchcards AS p 
  # INNER JOIN user_punchcards as up ON p.id = up.punchcard_id 
  # WHERE p.restaurant_id = 

  def self.rests_punchcards(id)
    select('p.id, r.user_id AS owner_id, p.restaurant_id as rest_id, up.current_points AS current_points, up.created_at AS created_at, up.user_id as customer_id')
    .from('punchcards AS p')
    .joins('INNER JOIN user_punchcards as up ON p.id = up.punchcard_id 
            INNER JOIN restaurants AS r ON p.restaurant_id = r.id')
    .where('r.user_id = (?)', id)
  end

end
