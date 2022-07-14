// generated from rosidl_generator_cpp/resource/idl__traits.hpp.em
// with input from ecat_msgs:msg/DataSent.idl
// generated code does not contain a copyright notice

#ifndef ECAT_MSGS__MSG__DETAIL__DATA_SENT__TRAITS_HPP_
#define ECAT_MSGS__MSG__DETAIL__DATA_SENT__TRAITS_HPP_

#include "ecat_msgs/msg/detail/data_sent__struct.hpp"
#include <rosidl_runtime_cpp/traits.hpp>
#include <stdint.h>
#include <type_traits>

// Include directives for member types
// Member 'header'
#include "std_msgs/msg/detail/header__traits.hpp"

namespace rosidl_generator_traits
{

template<>
inline const char * data_type<ecat_msgs::msg::DataSent>()
{
  return "ecat_msgs::msg::DataSent";
}

template<>
inline const char * name<ecat_msgs::msg::DataSent>()
{
  return "ecat_msgs/msg/DataSent";
}

template<>
struct has_fixed_size<ecat_msgs::msg::DataSent>
  : std::integral_constant<bool, false> {};

template<>
struct has_bounded_size<ecat_msgs::msg::DataSent>
  : std::integral_constant<bool, false> {};

template<>
struct is_message<ecat_msgs::msg::DataSent>
  : std::true_type {};

}  // namespace rosidl_generator_traits

#endif  // ECAT_MSGS__MSG__DETAIL__DATA_SENT__TRAITS_HPP_
