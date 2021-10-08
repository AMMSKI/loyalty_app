class Punchcard < ApplicationRecord
  belongs_to :restaurant
  has_many :users, through: :user_punchcards
  has_many :rewards

  def self.punchcard_rest

# SELECT p.id AS punch_id, p.description, p.total_points, r.name AS restaurant_name, r.id AS restaurant_id, r.city
# FROM punchcards AS p
# INNER JOIN restaurants AS R ON p.restaurant_id = r.id

    select('p.id AS punch_id, p.description, p.total_points, r.name AS restaurant_name, r.id AS restaurant_id, r.city')
    .from('punchcards AS p')
    .joins('INNER JOIN restaurants AS R ON p.restaurant_id = r.id')

  end

end
