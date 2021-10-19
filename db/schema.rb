# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_18_212552) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "punchcards", force: :cascade do |t|
    t.text "description"
    t.string "logo"
    t.bigint "restaurant_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "total_points"
    t.index ["restaurant_id"], name: "index_punchcards_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "city"
    t.string "zip"
    t.string "name"
    t.string "phone_number"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.index ["user_id"], name: "index_restaurants_on_user_id"
  end

  create_table "rewards", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "cost"
    t.bigint "punchcard_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["punchcard_id"], name: "index_rewards_on_punchcard_id"
  end

  create_table "user_punchcards", force: :cascade do |t|
    t.string "expiration_date"
    t.bigint "user_id", null: false
    t.bigint "punchcard_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "current_points"
    t.index ["punchcard_id"], name: "index_user_punchcards_on_punchcard_id"
    t.index ["user_id"], name: "index_user_punchcards_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "sign_in_count", default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "account_type"
    t.datetime "deleted_at"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "punchcards", "restaurants"
  add_foreign_key "restaurants", "users"
  add_foreign_key "rewards", "punchcards"
  add_foreign_key "user_punchcards", "punchcards"
  add_foreign_key "user_punchcards", "users"
end
