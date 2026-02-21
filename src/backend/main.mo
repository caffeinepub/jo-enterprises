import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type ContactInquiry = {
    name : Text;
    email : Text;
    message : Text;
  };

  let inquiries = Map.empty<Text, ContactInquiry>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let key = name.concat(email);
    if (inquiries.containsKey(key)) {
      Runtime.trap("Inquiry already exists with this name and email!");
    };
    let inquiry : ContactInquiry = { name; email; message };
    inquiries.add(key, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all inquiries");
    };
    inquiries.values().toArray();
  };

  public query ({ caller }) func getInquiry(name : Text, email : Text) : async ?ContactInquiry {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    let key = name.concat(email);
    inquiries.get(key);
  };
};
