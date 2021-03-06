class UserPunchcard < ApplicationRecord
  belongs_to :user
  belongs_to :punchcard

  def self.view_punchcard_customers(punch_id)
    # SELECT up.id, up.user_id, up.punchcard_id, u.name, up.current_points
    # FROM user_punchcards AS up
    # INNER JOIN users AS u ON up.user_id = u.id
    # WHERE punchcard_id = 31
    select('up.id, up.user_id, up.punchcard_id, u.name, up.current_points')
    .from('user_punchcards AS up')
    .joins('INNER JOIN users AS u ON up.user_id = u.id')
    .where('punchcard_id = (?) AND current_points IS NOT NULL', punch_id )
  end


  def self.punchcard_show(userpunchcard_id)
    # SELECT p.id AS punchcard_id, up.id AS userpunchcard_id, p.description AS punch_description, p.restaurant_id AS restaurant_id, r.name AS restaurant_name, up.current_points
    # FROM user_punchcards AS up
    # INNER JOIN punchcards AS p ON up.punchcard_id = p.id
    # INNER JOIN restaurants AS r ON p.restaurant_id = r.id
    # WHERE up.id = 145


    select('up.punchcard_id AS punchcard_id, p.description AS description, p.restaurant_id AS restaurant_id, r.name AS restaurant_name, up.current_points')
    .from('user_punchcards AS up')
    .joins('INNER JOIN punchcards AS p ON up.punchcard_id = p.id
    INNER JOIN restaurants AS r ON p.restaurant_id = r.id')
    .where('up.id = ?', userpunchcard_id)
    .limit(1)
  end

  def self.rewards_show(punchcard_id)
    # SELECT up.current_points, p.id AS punchcard_id, r.id AS reward_id, r.cost AS reward_cost, r.description AS reward_description
    # from punchcards AS p
    # INNER JOIN rewards AS r ON p.id = r.punchcard_id
    # INNER JOIN user_punchcards AS up ON up.punchcard_id = r.punchcard_id
    # WHERE p.id = 92

  select('up.current_points, p.id AS punchcard_id, r.id AS reward_id, r.cost AS reward_cost, r.description AS reward_description')
  .from('punchcards AS p')
  .joins('INNER JOIN rewards AS r ON p.id = r.punchcard_id
  INNER JOIN user_punchcards AS up ON up.punchcard_id = r.punchcard_id')
  .where('p.id = ?', punchcard_id)


  end
end
