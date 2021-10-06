# frozen_string_literal: true

class User < ActiveRecord::Base
  has_many :punchcards, through: :user_punchcards
  has_many :restaurants
  

  def self.punchcards_byuser(id)
    # SELECT u.id AS user_id, u.name AS user_name, u.email, up.id, up.punchcard_id AS user_punchcards_id, p.description AS punch_descrip, p.restaurant_id, r.name AS restaurant_name
    # FROM users AS u
    # INNER JOIN user_punchcards AS up ON up.user_id = u.id
    # INNER JOIN punchcards AS p ON up.punchcard_id = p.id
    # INNER JOIN restaurants AS r ON p.restaurant_id = r.id
    # WHERE u.id = 109

    select('u.id AS user_id, u.name AS user_name, u.email, up.id, up.punchcard_id AS user_punchcards_id, p.description AS punch_descrip, p.restaurant_id, r.name AS restaurant_name')
    .from('users AS u')
    .joins('INNER JOIN user_punchcards AS up ON up.user_id = u.id
     INNER JOIN punchcards AS p ON up.punchcard_id = p.id
     INNER JOIN restaurants AS r ON p.restaurant_id = r.id')
     .where('u.id = (?)', id)
  end
  
  extend Devise::Models
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :trackable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include DeviseTokenAuth::Concerns::User
  
end
brain.larkin@kozey-gusikowski.com